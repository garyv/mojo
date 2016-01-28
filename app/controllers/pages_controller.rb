class PagesController < ApplicationController
  def index
    @brand = Brand.new
    @order = Order.new

    # use cache control http headers
    expires_in 50.minutes, :public => true
  end
end