#$ ruby -Itest/ test/integration/about_integration_test.rb
require 'test_helper'

class AboutIntegrationTest < ActionDispatch::IntegrationTest
  
  def setup
  end

  test "site responds to /about" do
    visit "/about"
    assert has_content? "About"
  end

  test "about page is in navigation" do
    visit "/"
    within navigation do
      assert has_link?("About"), "about is in navigation"
      click_link "About"
    end
  end

  test "about page has site descirption" do
    @brand = Brand.new
    visit "/about"
    assert has_content?(@brand.description), "about has brand description"
  end

end
