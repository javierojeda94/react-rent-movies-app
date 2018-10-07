require 'rails_helper'

RSpec.describe MoviesController, type: :controller do

  let(:movie) { FactoryBot.create(:movie) }

  describe 'routing' do
    it { should route(:get, '/movies').to(action: :index) }
    it { should route(:get, "/movies/#{movie.id}").to(action: :show, id: movie.id) }
    it { should route(:get, '/movies/new').to(action: :new) }
    it { should route(:post, '/movies').to(action: :create) }
    it { should route(:get, "/movies/#{movie.id}/edit").to(action: :edit, id: movie.id) }
    it { should route(:put, "/movies/#{movie.id}").to(action: :update, id: movie.id) }
    it { should route(:post, '/rent_a_movie').to(action: :make_a_rent) }
  end

  describe 'actions' do
    context 'with a logged in user' do
      before(:each) do
        user = FactoryBot.create(:user)
        sign_in user
      end

      describe 'GET #index' do
        before { get :index }
        it { should respond_with(200) }
      end

      describe 'GET #show' do
        before { get :show, params: { id: movie.id } }
        it { should respond_with(200) }
      end

      describe 'GET #new' do
        before { get :new }
        it { should respond_with(200) }
      end

      describe 'POST #create' do
        let(:movie_params) { FactoryBot.attributes_for(:movie) }
        before { post :create, params: { movie: movie_params } }
        it { should respond_with(302) }
        it { should redirect_to(movies_path) }
        it { should set_flash }
        it 'saves a new movie' do
          expect{ post :create, params: { movie: movie_params } }.to change { Movie.count }.by(1)
        end
      end

      describe 'GET #edit' do
        let(:movie) { FactoryBot.create(:movie) }
        before { get :edit, params: { id: movie.id } }
        it { should respond_with(200) }
      end

      describe 'PUT #update' do
        let(:movie) { FactoryBot.create(:movie) }
        let(:movie_attributes) { FactoryBot.attributes_for(:movie) }
        it { should set_flash }
        before do
          put :update, params: { movie: movie_attributes, id: movie.id }
          movie.reload
        end
        it { should respond_with(302) }
        it { should redirect_to(movie_path(movie.id)) }
        it { expect(movie.name).to eql movie_attributes[:name] }
      end

      describe 'POST #make_a_rent' do
        before { post :make_a_rent, params: { id: movie.id } }
        it { should respond_with(200) }
        it { should set_flash }
      end
    end

    context 'without a logged in user' do
      describe 'GET #index' do
        before { get :index }
        it { should respond_with(302) }
        it { should redirect_to(root_path) }
      end

      describe 'GET #show' do
        before { get :show, params: { id: movie.id } }
        it { should respond_with(302) }
        it { should redirect_to(root_path) }
      end

      describe 'GET #new' do
        before { get :new }
        it { should respond_with(302) }
        it { should redirect_to(root_path) }
      end

      describe 'POST #create' do
        let(:movie_params) { FactoryBot.attributes_for(:movie) }
        before { post :create, params: movie_params }
        it { should respond_with(302) }
        it { should redirect_to(root_path) }
        it { should set_flash }
        it 'not saves a new movie' do
          expect{ post :create, params: { movie: movie_params } }.to_not change { Movie.count }
        end
      end

      describe 'GET #edit' do
        let(:movie) { FactoryBot.create(:movie) }
        before { get :edit, params: { id: movie.id } }
        it { should respond_with(302) }
        it { should redirect_to(root_path) }
      end

      describe 'PUT #update' do
        let(:movie) { FactoryBot.create(:movie) }
        let(:movie_attributes) { FactoryBot.attributes_for(:movie) }
        before do
          put :update, params: { movie: movie_attributes, id: movie.id }
          movie.reload
        end
        it { should respond_with(302) }
        it { should redirect_to(root_path) }
        it { should set_flash }
        it { expect(movie.name).to_not eql movie_attributes[:name] }
      end

      describe 'GET #make_a_rent' do
        before { post :make_a_rent, params: { id: movie.id } }
        it { should respond_with(302) }
        it { should redirect_to(root_path) }
        it { should set_flash }
      end
    end
  end

  describe 'callbacks' do
    it { should use_before_action(:authenticate_user!) }
    it { should use_before_action(:set_movie) }
  end

end
