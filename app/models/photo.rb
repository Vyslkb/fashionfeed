class Photo < ActiveRecord::Base
  attr_accessible :image_url
  self.per_page = 50
end
