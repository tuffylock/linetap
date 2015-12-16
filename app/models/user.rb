class User < ActiveRecord::Base
  has_secure_password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true # NOTE: case sensitivity?
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :set_session_token

  scope :caseless_find, lambda {
    |attr, value| where("lower(#{attr}) = ?", value.downcase).first
  }

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
