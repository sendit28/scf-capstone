class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_one :user
  has_many :user_post_comments
  has_many :categories
end
