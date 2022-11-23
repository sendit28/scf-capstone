class PostCategoriesController < ApplicationController

  belongs_to :post
  belongs_to :category
  
end
