class Order

  attr_accessor :first_name, :last_name, :email, :address, :address_2, :quantity, 
                :card_name, :card_number, :card_verification_code, :card_expires

  # requirements for form_for with plain ruby object
  include ActiveModel::Conversion
  extend ActiveModel::Naming
  def persisted?
    false
  end

end