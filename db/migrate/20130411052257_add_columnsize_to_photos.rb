class AddColumnsizeToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :colspan, :integer
  end
end
