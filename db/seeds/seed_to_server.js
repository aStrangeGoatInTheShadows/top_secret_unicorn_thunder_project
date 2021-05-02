const db_client = require('../db.js');

// @ https://stackoverflow.com/questions/19429193/promises-with-fs-and-bluebird
// const Promise = require("bluebird");
// const fs = Promise.promisifyAll(require("fs"));
const fs = require('fs');




fs.readFile("./db/seeds/02_polls.sql",'utf-8', function (err, data) {
  if (data) {
    console.log(data);
    return db_client.query(data);
  }

  console.log('there was a problem', err);
});