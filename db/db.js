require("dotenv").config();
const pg = require("pg");
const Client = pg.Client;
// console.log(process.env);

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: "unicorn_thunder",
};

const db_client = new Client(config);

db_client.connect(() => {
  console.log(`Connected to database`);
});

module.exports = db_client;

// const some_poll = {
//   title: 'awesome poll',
//   description: 'this is a description of our super awesome poll',
//   admin_link: 'google.ca/figureitoutyourself',
//   survey_link: 'lighthouselabs.ca',
//   time_created: Date.now(),
//   time_closed: null,
//   time_to_death: null
// }

// put.put_new_poll(some_poll);

// module.exports = dbParams;
