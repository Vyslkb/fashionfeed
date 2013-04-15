class AddEventToPhoto < ActiveRecord::Migration
  def change
    add_column :photos, :event, :string
  end
end
