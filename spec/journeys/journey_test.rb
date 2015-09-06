require_relative 'helpers/spec_helper'
require_relative 'helpers/journey_steps'
require_relative 'helpers/expectations'

describe 'when a user makes a budget' do
  let (:now) {JourneySteps.new}
  let (:then_expect) {Expectations.new}
  it 'lets a user make budgets' do
    now.visit_app
    then_expect.to_see_the_regex_splash_page
    now.click_button_to_go_to_all_puzzles
    then_expect.to_see_the_list_of_puzzles
  end
end
