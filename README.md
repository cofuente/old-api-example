# README

## Setting up your environment

1. Install Node.js and npm using Homebrew
   1. First, install Homebrew:
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
   1. Run `brew update` to make sure your version is up to date
   1. To install Node, run `brew install node`
   1. To confirm that Node is installed, enter `node -v` in your terminal. This should print out a verison number, ex: `v0.10.31`
   1. To confirm that npm is installed, enter `npm -v` in your terminal. This should print out a version number, ex: `1.4.27`
1. If Node.js and npm are already installed on your system, make sure you have the latest versions.
   1. To get the latest version of Homebrew, run `brew update`
   1. To update your version of Node, tun `brew upgrade node`
1. Install PostgreSQL
   1. Run `brew install postgresql`
   1. (Optional) You can use the [Postgres app](https://postgresapp.com/) if you'd like to have a richer UI than the command line

## Getting started

1. `cd` into this repository
1. Check that you're using the same version as specified in `./nvmrc`. You can check this manually by running `node -v` and seeing if the values match. If not, run the following commands.
   1. `nvm use`
   1. `nvm install`
   1. `nvm exec`
   1. `nvm which` - This should print out which nvm version you're using (ex: "`/Users/amy/.nvm/versions/node/v14.11.0/bin/node`")

   If you don't have nvm installed, follow the instructions [here](https://github.com/nvm-sh/nvm#installing-and-updating) to install.
   If you want deeper shell integration with nvm, you can add the following script to your [bash](https://github.com/nvm-sh/nvm#bash) or [zsh](https://github.com/nvm-sh/nvm#zsh) profiles to automatically use the correct nvm version of the directory you're in.
1. Run `npm install`
1. To start your postgres server, run `pg_ctl -D /usr/local/var/postgres start`. Keep this running while you continue in a different window
1. (Only do this the first time you set up your repo) Create a database named pebe by running `createdb pebe`
1. Run `npm run seed`. This writes a seed entry to the database needed for the Sequelize model validation; otherwise, writing to the database will not work.
1. Run `npm run start` You should see the message:

   > Postgres server is up and running!
   >
   > API listening on port:1337
   >
   > Client awaits at <http://localhost:1337>

## Development Information

* Changes should pass `npm run test` before committing.
* To stop your Postgres server, run `pg_ctl -D /usr/local/var/postgres stop`.
