Rails.application.routes.draw do
  # config/routes.rb
  resources :post_categories
  resources :categories
  resources :user_post_comments
  resources :posts, only: [:index, :create]
  resources :users
  
  get 'fallback/index'

  # route to test your configuration
  # get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
