class User < ApplicationRecord

  has_secure_password

  has_many :posts

  has_many :user_post_comments
  has_many :posts, through: :user_post_comments

  validates :email, :username, presence: true, uniqueness: true

end
