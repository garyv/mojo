source 'https://rubygems.org'

gem 'rails', '4.2.5'
gem 'mysql2', '>= 0.3.13', '< 0.5'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

#gem 'haml'
#gem 'friendly_id'
gem 'font-awesome-rails'
gem 'animate-rails'

gem 'jquery-rails'
#gem 'jbuilder', # remove jbuilder to avoid conflicts
gem 'active_model_serializers', github: 'rails-api/active_model_serializers'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'minitest-rails'
  gem 'factory_girl_rails'
  gem 'quiet_assets'
  gem 'better_errors'
  gem 'shoulda'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  #gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end