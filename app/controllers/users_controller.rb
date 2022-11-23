class UsersController < ApplicationController
  has_secure :password

  has_many :user_post_comments
  has_many posts, through: :user_post_comments

  validates :email, :username, presence: true

end
