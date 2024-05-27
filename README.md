# Performance Period Goal - [Objection.js Tutorial](https://www.youtube.com/watch?v=zbIl2kuP7tE&list=PL9bl9PtF4lstwO_IcGRsoirLCGRIiFTbU&index=8&t=1677s)

## Setup
 - Go to directory where you want to build project: `mkdir objection-tutorial`
 - Inside of directory `npm init -y` creates `package.json` file

## Installations
 - `npm install express objection knex pg`: installs express, objection.js, knex.js, and postgres drivers
 - Install postgres locally if needed: use UI pgAdmin or DBeaver to manage db
 - `npm i --save-dev nodemon`
 - Open project, create `index.js` file 
 - In `package.json`, add to scripts: `dev: "nodemon index.js"` for hot reload

## Set up database
 - Create a folder `db` for database
 - Create two more folders in this folder, `migrations` and `seeds`
 - Knex pulls configuration from knexfile.js, `npx knex init` - use npx if it isn't installed globally
 - `knexfile.js` - configurations for development, staging and production - delete sqllite local file - delete all modules except development
 - Add database, user, and password information - user is system user
 - To find system user, run `whoami`
 - Use snakecase for database names
 - `const {knexSnakeCaseMappers} = require('objection');` //firstName --> first_name
 - destructure it in knexfile.js `...knexSnakeCaseMappers`

Specify seeds under migrations as object: inital data or directory where we store files that create initial data
Nice for local development, don't want to manually insert that stuff all the time
seeds: {
    directory: './seeds',
} 

## Migrations
 - Create database schema, create first migration
 - As database evolves, you need a tool to properly manage it --> migrations
 - `npx knex migrate:make init`
 - Creates initial migration file
 - Create database, exports up / exports down
 - Make migrate script in package.json
 - "migrate": "npx knex migrate:latest --knexfile ./db/knexfile.js" --> change knex command to a shorter command
 - `npm run migrate`

## Seeds
 - Create seed data, initial data
 - add to scripts: "make-seed": "npx knex seed:make dev --knexfile .db/knexfile.js"
 - "seed": "npm knex seed:run --knexfile ./db/knexfile.js",

## Create database models
 - /db/models...channel, user, and video.js
 - See files for syntax

## Create db-setup.js file
 - Globally install database inside of all models
 - Now Objection.js knows how to access the database
 - See `db/db-setup.js` for syntax

## index.js --> setup Express server to fun
 - See file for syntax
 - `npm run dev`

## Relation mappings --> see user.js
 - Add .withGraphFetched('channel') to load channel object with user object

## View JSON response in browser
 - localhost:8080/table/id --> localhost:8080/user/1
