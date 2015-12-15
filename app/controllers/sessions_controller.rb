class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.find_by(username: params[:user][:username])

    if user && user.authenticate(params[:user][:password])
      redirect_to root_url, notice: ["#{user.username} logged in"]
    else
      flash.now[:alert] = ["Invalid username or password"]
      @user = User.new(username: params[:user][:username])
      render :new
    end
  end

  def destroy

  end
end
