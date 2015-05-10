namespace :db do
  desc 'Erase and fill database'
  task :populate => :environment do
    require 'populator'
    require 'faker'

    [User].each(&:delete_all)

    User.populate 20 do |user|
      user.first_name = Faker::Name.first_name.titleize
      user.last_name = Faker::Name.last_name.titleize
      user.age = Faker::Number.digit
      user.address = "#{Faker::Address.city.titleize}, #{Faker::Address.street_address} "
    end

  end
end