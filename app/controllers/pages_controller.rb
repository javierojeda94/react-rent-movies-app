class PagesController < ApplicationController
  def index
    redirect_to movies_path if user_signed_in?
  end
end
