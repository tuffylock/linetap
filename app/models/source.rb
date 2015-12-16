class Source < ActiveRecord::Base
  validates :title, :body, presence: true
end
