class MoviesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_movie, only: %i[show edit update make_a_rent]

  def index
    @movies = Movie.all.each { |m| m.synopsis = m.synopsis.truncate_words(10) }
  end

  def show
  end

  def new
    @movie = Movie.new
  end

  def create
    movie = Movie.new(movie_params)
    if movie.save

      flash[:success] = 'The movie has been created!'
      redirect_to movies_path
    else
      flash[:error] = movie.errors.to_a.join(', ')
      flash[:submitted] = true
      flash[:sent_name] = movie_params[:name]
      flash[:sent_synopsis] = movie_params[:synopsis]
      flash[:sent_rating] = movie_params[:rating]
      redirect_to new_movie_path
    end
  end

  def edit
  end

  def update
    if @movie.update(movie_params)
      flash[:success] = 'The movie has been updated!'
      redirect_to movie_path(@movie)
    else
      flash[:error] = @movie.errors.to_a.join(', ')
      flash[:submitted] = true
      flash[:sent_name] = movie_params[:name]
      flash[:sent_synopsis] = movie_params[:synopsis]
      flash[:sent_rating] = movie_params[:rating]
      redirect_to edit_movie_path(@movie)
    end
  end

  def make_a_rent
    response = @movie.rent_message
    flash[response[:flash_type]] = response[:message]
    render json: response
  end

  private

  def set_movie
    @movie = Movie.find(params[:id])
  end

  def movie_params
    params.require(:movie).permit(:name, :synopsis, :rating)
  end
end
