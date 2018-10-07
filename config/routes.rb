Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'user/sessions',
    registrations: 'user/registrations'
  }
  root to: 'pages#index'
  resources :movies
  post 'rent_a_movie', to: 'movies#make_a_rent', as: :rent_movie
end
