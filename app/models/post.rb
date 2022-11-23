class Post < ApplicationRecord
 
  # belongs_to :user

  has_many :user_post_comments
  has_many :users, through: :user_post_comments

  has_many :post_categories
  has_many :categories, through: :post_categories

end
