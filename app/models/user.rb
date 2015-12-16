class User < ActiveRecord::Base
  has_secure_password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: { case_sensitive: false, on: :create }
  validates :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :set_session_token

  # NOTE: returns all users if users does not exist (default scope). possible to compensate with User.is_a? in controller
  # scope :caseless_find, ->(attr, val) { where("lower(#{attr}) = ?", val.downcase).first }

  def self.caseless_find(attr, value)
    where("lower(#{attr}) = ?", value.downcase).first
  end

  def reset_session_token!
    self.session_token = new_token
    self.save!
    self.session_token
  end

  private

  def set_session_token
    self.session_token ||= new_token
  end

  def new_token
    SecureRandom.urlsafe_base64
  end
end
