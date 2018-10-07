# frozen_string_literal: true

class User::RegistrationsController < Devise::RegistrationsController
  before_action :set_user, only: [:create]

  def create
    if @user.save
      sign_in(@user)
      flash[:success] = 'You\'ve successfully signed up!'
    else
      flash[:error] = @user.errors.to_a.join(', ')
      flash[:email] = params[:email]
      flash[:action] = :sign_up
    end
    redirect_to root_path
  end

  private

  def set_user
    @user = User.new(email: params[:email],
                     password: params[:password],
                     password_confirmation: params[:password_confirmation])
  end
end
