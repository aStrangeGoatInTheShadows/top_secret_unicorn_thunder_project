const db_client = require("../db.js");
const fs = require("fs");
const { Client } = require("pg/lib");

let sql_file = "";

// This will write the seeds file to our database
//fs.readFile("./db/seeds/02_polls_seed.sql",'utf-8', function (err, data) {
fs.readFile(
    "./db/seeds/02_polls_seed.sql",
    "utf-8",
    function (err, data) {
      if (data) {
        sql_file = data;
        db_client
          .query(sql_file)
          .then(()=>{});
      }
    }
);

