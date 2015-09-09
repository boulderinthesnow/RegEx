class Api::PuzzlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @puzzles = Puzzle.all
    render :json => @puzzles
  end
end
