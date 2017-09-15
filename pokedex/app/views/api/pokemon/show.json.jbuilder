json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type
  json.image_url asset_path(@poke.image_url)
end

json.items @poke.items.each do |item|
  json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
end
