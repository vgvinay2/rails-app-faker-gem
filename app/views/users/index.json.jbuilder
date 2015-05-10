json.array!(@users) do |user|
  json.extract! user, :id, :user, :first_name, :last_name, :age, :address
  json.url user_url(user, format: :json)
end
