require("dotenv").config();
const pg = require("pg");
const Client = pg.Client;

//  DON'T TRY TO USE ANYTHING OTHER THAN JUST THE URL
// NO PASSWORDS OR PORTS OR USER
const db_client = new Client(process.env.DATABASE_URL);

db_client.connect()
  .then(()=>console.log('Connected to database'));

module.exports = db_client;