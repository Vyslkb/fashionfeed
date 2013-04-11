class Photo < ActiveRecord::Base
  attr_accessible :image_url, :designer, :colspan
  self.per_page = 40
end
