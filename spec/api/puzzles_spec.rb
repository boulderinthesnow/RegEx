require_relative 'helpers/spec_helper'

describe 'puzzles' do
  describe '#index' do
    it 'retrieves all of the puzzles' do
      FactoryGirl.create(:puzzle, id: 1, name: 'first-puzzle')
      FactoryGirl.create(:puzzle, id: 2, name: 'second-puzzle')

      get '/api/puzzles'

      expect(response.status).to be(200)
      puzzles = JSON.parse(response.body)['puzzles']
      expect(puzzles.size).to be(2)
      expect(puzzles[0]['name']).to eq('first-puzzle')
      expect(puzzles[1]['name']).to eq('second-puzzle')
    end
  end
end
