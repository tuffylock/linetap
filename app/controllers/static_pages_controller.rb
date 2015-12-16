class StaticPagesController < ApplicationController
  before_action :require_account!

  def root
  end
end
