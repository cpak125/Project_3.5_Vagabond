class Post < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :city
end
