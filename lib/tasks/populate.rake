require 'populator'
require 'faker'

namespace :db do
  desc 'Erase and fill database'
  task :populate => :environment do
    [User].each(&:delete_all)
    User.populate 20 do |user|
      user.first_name = Faker::Name.first_name.titleize
      user.last_name = Faker::Name.last_name.titleize
      user.age = Faker::Number.digit
      user.address = "#{Faker::Address.city.titleize}, #{Faker::Address.street_address} "
    end

  end
end

#####################################################
#####################################################
namespace :code do
  desc 'Test Code'
  task :populate => :environment do
    p 'hiii'
  end
end


namespace :pick do
  desc "Pick a random user as the winner"
  task :winner => :environment do
    puts "Winner: #{pick(User).name}"
  end

  desc "Pick a random product as the prize"
  task :prize => :environment do
    puts "Prize: #{pick(Product).name}"
  end

  desc "Pick a random prize and winner"
  task :all => [:prize, :winner]

  def pick(model_class)
    model_class.find(:first, :order => 'RAND()')
  end
end


#####################################################
#####################################################
##  rails g task my_namespace my_task1 my_task2
## will create task /lib/tasks/my_namespace.rake check out the file
## rake -T | grep my_namespace