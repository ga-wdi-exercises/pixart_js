class AddTimestampsToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :created_at, :datetime
   add_column :artists, :updated_at, :datetime
  end
end
