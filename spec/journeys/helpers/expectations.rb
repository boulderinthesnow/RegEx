require_relative 'spec_helper'

class Expectations
  include ::RSpec::Matchers
  include Capybara::DSL

  def to_see_the_regex_splash_page
    puts 'Looking for the splash page...'
    expect(page).to have_content 'Welcome to RegEx.io'
  end
end
