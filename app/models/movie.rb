class Movie < ApplicationRecord
  validates :name, :synopsis, :rating, presence: true
  validates :rating, inclusion: %w[G PG PG-13 R NC-17]

  def rent_message
    can_rent = [true, false].sample
    if can_rent
      response = {
        rent: true,
        message: 'The rent was completed!',
        flash_type: :success
      }
    else
      response = {
        rent: false,
        message: 'You can not rent now because you have balance to pay!',
        flash_type: :error
      }
    end
    response
  end

  def as_json
    {
      id: id,
      name: name,
      synopsis: synopsis,
      rating: rating,
      self_path: movie_path,
      edit_path: edit_movie_path
    }
  end

  private

  def movie_path
    Rails.application.routes.url_helpers.movie_path(id) if self.id
  end

  def edit_movie_path
    Rails.application.routes.url_helpers.edit_movie_path(id) if self.id
  end
end
