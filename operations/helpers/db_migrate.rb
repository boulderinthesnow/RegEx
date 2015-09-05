module CLI
  class DbMigrate < Thor
    desc 'test', 'Migrate the test database'
    def test
      migrate('test')
    end

    desc 'production', 'Migrate the production database'
    def production
      migrate('production')
    end

    private

    def migrate(environment)
      system "rake db:migrate RAILS_ENV=#{environment}"
      puts 'Database successfully migrated!'
    end
  end
end
