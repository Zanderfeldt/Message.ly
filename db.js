/** Database connection for messagely. */


const { Client } = require("pg");
const { DB_NAME } = require("./config");

const client = new Client({
  host: "/var/run/postgresql/",
  database: DB_NAME
});

client.connect();


module.exports = client;
