class PagesController < ApplicationController
  def index
    @brand = Brand.new
    @order = Order.new
  end
end