/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('channel', table => { //create 'channel' table
            table.increments(); //add an id column as an integer automatically (can also use uuids)
            table.string('name').notNullable(); //name column
            table.timestamps(true, true); //createdAt and updatedAt timestamps
        })
        .createTable('user', table => { //create user table
            table.increments();
            table.string('name').notNullable(); 
            table.string('email').notNullable().unique(); 
            table
                .integer('channelId')
                .references('id') //references id column in 'channel' table, this is nullable
                .inTable('channel');
            table.timestamps(true, true);
        })
        .createTable('video', table => {
            table.increments();
            table.string('title').notNullable();
            table
                .integer('channelId')
                .notNullable()
                .references('id') //references id column in 'channel' table
                .inTable('channel');
            table.timestamps(true, true);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('video')
        .dropTableIfExists('user')
        .dropTableIfExists('channel')
    };
