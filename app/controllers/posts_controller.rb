class PostsController < ApplicationController

  skip_before_action :authorize, only: :index

  def index 
    render json: Post.all, status: :ok
  end

  def create 
    # binding.pry
    post = Post.new(post_params)
    post.user_id = @current_user.id
    post.save
    render json: post, status: :created 
  end

  def show
    post = Post.find_by(id: params[:id])
    render json: post, status: :ok
  end

  def update
    post = Post.find_by(id: params[:id])
    post.update(post_params)
    render json: post, status: :accepted
  end

  # binding.pry
  def destroy
    post = Post.find_by(id: params[:id])
    post.destroy
    # head :no_content
    render json: post, status: :ok
  end

  private

  def post_params
    params.permit(:title, :date, :description)
  end

end
