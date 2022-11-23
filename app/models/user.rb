class User < ApplicationRecord
  has_many :user_post_comments
  has_many :posts, through: :user_post_comments
end
