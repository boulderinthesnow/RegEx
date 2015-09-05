require_relative '../helpers/db_purge'
require_relative '../helpers/db_migrate'

module CLI
  class Db < Thor
    desc 'purge', 'Purge subcommands'
    subcommand "purge", CLI::DbPurge

    desc 'migrate', 'Migration subcommands'
    subcommand "migrate", CLI::DbMigrate
  end
end
