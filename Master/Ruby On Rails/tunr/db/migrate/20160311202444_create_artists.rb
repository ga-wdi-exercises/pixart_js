class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
        t.string :name
        t.string :photo_url
        t.string :nationality

    end
  end
end
