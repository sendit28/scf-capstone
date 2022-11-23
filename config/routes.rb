Rails.application.routes.draw do
  resources :post_categories
  resources :categories
  resources :user_post_comments
  resources :posts
  resources :users
  get 'fallback/index'

  get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
