class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.text :address






      task default: %w[test]
      Rake::Task




      t.timestamps null: false
    end
  end
end