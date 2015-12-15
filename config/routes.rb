Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create]
  get 'register', to: 'users#new', as: :new_user

  resource :session, only: [:create, :destroy]
  get 'login', to: 'sessions#new', as: :new_session

  # get '*path', to: 'static_pages#root' # unknown urls to root
end
