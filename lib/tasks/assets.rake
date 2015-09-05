Rake::Task['assets:precompile'].clear
namespace :assets do
  task 'precompile' do
    puts 'Not pre-compiling assets...thank Heroku for this shit'
  end
end