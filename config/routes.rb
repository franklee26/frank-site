Rails.application.routes.draw do
  root 'homepage#index'
  get 'blogposts' => 'blogposts#index'
  get 'signup' => 'users#new'
  resources :users
end
