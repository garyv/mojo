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

  def teardown
    Capybara.reset_sessions!
    # This is because capabara acts like a web browser, with cookies and history
    
    Capybara.use_default_driver
    # multiple drivers out there, some let you execute JS and use external websites
  end
end