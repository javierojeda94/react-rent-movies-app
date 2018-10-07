FactoryBot.define do
  factory :movie do
    name { FFaker::Movie.title }
    synopsis { FFaker::Lorem.paragraph }
    rating { FFaker::Movie.rating }
  end
end
