class CreatePuzzles < ActiveRecord::Migration
  def change
    create_table :puzzles do |t|
      t.string :name
      t.string :regex

      t.timestamps null: false
    end
  end
end
