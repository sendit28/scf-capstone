class AddTmageToPosts < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :img_url, :string
  end
end
