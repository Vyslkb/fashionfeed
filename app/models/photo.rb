class Photo < ActiveRecord::Base
  attr_accessible :image_url
  self.per_page = 100
end
