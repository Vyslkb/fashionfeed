class AddDesignerToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :designer, :string
  end
end
