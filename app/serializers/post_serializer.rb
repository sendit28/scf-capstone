class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url
  has_one :user
  has_many :user_post_comments
  has_many :categories
end
