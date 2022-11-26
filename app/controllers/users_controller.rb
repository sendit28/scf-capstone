class UsersController < ApplicationController
  
  # /signup
  def create 
    user = User.create(user_params)
    binding.pry
  end

  # /me
  def show
    user = User.find(session[:user_id])
    binding.pry
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

end
