class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :name, null: false
      t.string :synopsis, null: false
      t.string :rating

      t.timestamps
    end
  end
end
