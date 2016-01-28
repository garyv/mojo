#$ ruby -Itest test/models/brand_test.rb

require 'test_helper'

class BrandTest < ActiveSupport::TestCase
  
  def setup
    @brand = Brand.new
  end

  test "brand has title method" do
    assert_respond_to @brand, :title
  end

  test "brand's title is not blank" do
    assert @brand.title.present? 
  end

end
