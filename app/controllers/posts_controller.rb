class PostsController < ApplicationController

  has_many :user_post_comments
  has_many :users, through: :user_post_comments
  
end
