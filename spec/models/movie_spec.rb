require 'rails_helper'

RSpec.describe Movie, type: :model do
  context 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:synopsis) }
    it { should validate_presence_of(:rating) }
    it { should validate_inclusion_of(:rating).in_array(%w[G PG PG-13 R]) }
  end

  context 'methods' do
    it { should respond_to(:rent_message) }
    it { should respond_to(:as_json) }
  end
end
