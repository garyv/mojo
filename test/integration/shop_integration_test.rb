#$ ruby -Itest/ test/integration/shop_integration_test.rb
require 'test_helper'

class ShopIntegrationTest < ActionDispatch::IntegrationTest
  
  def setup
    @user = FactoryGirl.create :user
    visit "/"
  end

  test "Site responds to /shop url" do
    visit "/shop"
    assert "/shop", current_path
  end

  test "shop page is present" do
    within navigation do
      assert has_link?("Shop"), "shop is in navigation"
      click_link "Shop"
    end
    assert has_css?('form'), "shop page has a form"
  end

  test "navigation" do
    assert has_css?(".nav"), "site has a navigation class"
  end

end
