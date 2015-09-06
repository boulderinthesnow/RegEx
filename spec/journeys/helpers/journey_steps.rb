require_relative 'spec_helper'

class JourneySteps
  include Capybara::DSL

  def visit_app
    puts 'Going to the app...'
    visit '/'
  end

  def click_button_to_go_to_all_puzzles
    puts 'Clicking the Go To Puzzles button...'
    click_button 'Go to Puzzles'
  end
end
