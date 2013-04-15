class Photo < ActiveRecord::Base
  attr_accessible :image_url, :designer, :colspan, :event
  self.per_page = 40
end
