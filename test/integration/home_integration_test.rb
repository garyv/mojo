# ruby -Itest/ test/integration/home_integration_test.rb
require 'test_helper'

class HomeIntegrationTest < ActionDispatch::IntegrationTest
  
  def setup
    #@user = FactoryGirl.create :user
  end

  test "the truth" do
    assert true, "truth be told"
  end

  test "home page" do
    visit "/"
    within "h1" do
      assert has_content?(site_name), "site name in h1"
    end
  end

end
