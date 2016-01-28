# just for testing, not a model in the app
class User
  attr_accessor :name, :address, :address_2, :zip, 
                :card_name, :card_number, :card_verification_code, :expires_month, :expires_year
end

FactoryGirl.define do
  factory :user do
    skip_create
    sequence(:name) {|i| "Joe Nobody #{i}" }
    address "123 Fake St"
    address_2 "Manhattan, NY"
    zip "10001"

    factory :david_bowie do
      name "David Bowie"
      address "Outer Space"
      address_2 "It's pretty far out"
    end

  end
end
