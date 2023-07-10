class Api::MessagesController < ApplicationController
  def index
    @greeting = Message.pluck(:name).sample

    render json: @greeting
end