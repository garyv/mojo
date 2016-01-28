ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'factory_girl'
require 'capybara/rails' 
require 'minitest/rails'


class ActiveSupport::TestCase
  include Capybara::DSL
  
  def site_name;    "Mojo Drink"; end
  def navigation;   '.nav'; end
  def order_form;   'form#new_order'; end

  def over_here   
    puts "** " * 99; puts current_path
  end

  # TODO - remove this
  #

  # def assert_link_then_click link_text
  #   assert has_link? link_text
  #   click_link link_text
  # end

  # def assert_current_path_is expected_path
  #   assert_equal expected_path, current_path
  # end

  #def submit_sign_in_form
  #  @user ||= FactoryGirl.create :user
  #  fill_in 'Email', :with => @user.email
  #  fill_in 'Password', :with => @user.password
  #  click_on 'Sign in'
  #end
  #def sign_in
  #  visit admin_path
  #  within sign_in_form do
  #    submit_sign_in_form
  #  end
  #end



  def teardown
    Capybara.reset_sessions!
    # This is because capabara acts like a web browser, with cookies and history
    
    Capybara.use_default_driver
    # multiple drivers out there, some let you execute JS and use external websites
  end
end