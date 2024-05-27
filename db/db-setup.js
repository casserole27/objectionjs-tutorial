const knex = require('knex');
const knexfile = require('./knexfile');
const { Model } = require('objection');

function setupDb() {
    const db = knex(knexfile.development);
    Model.knex(db);
    //globally install database inside of all models
    //now Objection.js knows how to access the database
}

module.exports = setupDb;