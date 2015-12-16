class Api::SourcesController < ApplicationController
  def index
    @sources = Source.all
    render :index
  end

  def show
    @source = Source.find(params[:id])
    render :show
  end
end
