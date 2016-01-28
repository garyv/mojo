#$ ruby -Itest/ test/integration/home_integration_test.rb
require 'test_helper'

class HomeIntegrationTest < ActionDispatch::IntegrationTest
  
  def setup
    visit "/"
    @brand = Brand.new
  end

  test "the truth" do
    assert true, "truth be told"
  end

  test "home page" do
    within "h1" do
      assert has_content?(@brand.title), "home has site name in h1 tag"
    end
  end

  test "navigation" do
    assert has_css?(navigation), "home has a navigation"
    assert has_css?("nav") || has_css?("[role='navigation']"), "home has a semantic navigation"
  end

end
