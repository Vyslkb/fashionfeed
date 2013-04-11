class Photo < ActiveRecord::Base
  attr_accessible :image_url, :designer
  self.per_page = 40
end
