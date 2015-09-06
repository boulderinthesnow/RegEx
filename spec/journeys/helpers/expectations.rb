require_relative 'spec_helper'

class Expectations
  include ::RSpec::Matchers
  include Capybara::DSL

  def to_see_the_regex_splash_page
    puts 'Looking for the splash page...'
    expect(page).to have_content 'Welcome to RegEx.io'
  end

  def to_see_the_list_of_puzzles
    puts 'Looking for the list of puzzles...'
    expect(page).to have_content 'First Puzzle'
    expect(page).to have_content 'Second Puzzle'
  end
end
