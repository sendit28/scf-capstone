class PostsController < ApplicationController

  skip_before_action :authorize, only: :index

  def index 
    render json: Post.all 
  end

  def create 
    # binding.pry
    post = Post.new(post_params)
    post.user_id = @current_user.id
    post.save
    render json: post, status: :created 
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
