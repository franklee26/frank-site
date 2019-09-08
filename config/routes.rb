Rails.application.routes.draw do
  root 'homepage#index'
  get 'blogposts' => 'blogposts#index'
end
