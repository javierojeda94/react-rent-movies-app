# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  def create
    user = User.find_by_email(params[:email])
    if user && user.valid_password?(params[:password])
      sign_in(user)
      respond_with user, location: root_path
    else
      flash[:error] = 'Wrong credentials!'
      flash[:email] = params[:email]
      flash[:action] = :login
      redirect_to root_path
    end
  end
end
