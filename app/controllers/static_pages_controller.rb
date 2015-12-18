class StaticPagesController < ApplicationController
  before_action :require_account!, except: [:root]

  def root
  end
end
