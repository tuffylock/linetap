class CreateSources < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :title, null: false
      t.text :body, null: false

      t.timestamps null: false
    end
  end
end
