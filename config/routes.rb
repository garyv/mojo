Rails.application.routes.draw do
  
  root 'pages#index'

  get ':page' => 'pages#index', page: /about|shop|contact/

  resources :orders

end
