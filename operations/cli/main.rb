require_relative 'js'
require_relative 'db'
require_relative 'api'
require_relative 'journeys'

module CLI
  class Main < Thor
    desc 'js', 'Javascript subcommands'
    subcommand 'js', CLI::Js

    desc 'api', 'Api subcommands'
    subcommand 'api', CLI::Api

    desc 'db', 'Database subcommands'
    subcommand 'db', CLI::Db

    desc 'journeys', 'Journey test subcommands'
    subcommand 'journeys', CLI::Journeys

    desc 'test', 'Run all tests'
    def test
      system 'budget js test'
      system 'budget api test'
      system 'budget journeys test'
    end

    desc 'install', 'Install all needed dependencies'
    def install
      system 'bundle install'
      system 'npm install'
      system 'bower install'
    end

    desc 'deploy', 'Deploy the app to Heroku'
    def deploy
      puts 'Did you precompile your assets with "RAILS_ENV=production bundle exec rake assets:precompile" and commit those new files?'
      system 'git push heroku master'
    end

    desc 'ship', 'Push changes to github'
    def ship
      system 'git push origin master'
    end
  end
end
