class Api::DocumentsController < ApplicationController
  def index
    @documents = Document.all
    render :index
  end

  def show
    @document = Document.find(params[:id])
    render :show
  end
end
