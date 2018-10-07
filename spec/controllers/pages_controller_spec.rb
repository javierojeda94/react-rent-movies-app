require 'rails_helper'

RSpec.describe PagesController, type: :controller do
  describe 'routing' do
    it { should route(:get, '/').to(action: :index) }
  end

  describe 'requests' do
    context 'when user is logged in' do
      before do
        user = FactoryBot.create(:user)
        sign_in user
        get :index
      end
      it { should redirect_to(movies_path) }
    end

    context 'when user is not logged in' do
      it { should_not redirect_to(movies_path) }
    end
  end
end
