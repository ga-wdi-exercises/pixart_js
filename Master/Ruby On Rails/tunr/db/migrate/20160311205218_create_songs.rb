class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :album
      t.string :preview
      t.belongs_to :artist
    end
  end
end
