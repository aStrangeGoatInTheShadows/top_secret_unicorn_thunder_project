require("dotenv").config();
const pg = require("pg");
const Client = pg.Client;

//  DON'T TRY TO USE ANYTHING OTHER THAN JUST THE URL
// NO PASSWORDS OR PORTS OR USER
const db_client = new Client(process.env.DATABASE_URL);

db_client.connect()
  .then(()=>console.log('Connected to database'));

// Creates an formats a query string for PSQL based on what its passed
const makeGetQuery = function (selection, table, where) {
  let queryString = `SELECT ${selection}
  FROM ${table}
  `;

  if(where) {
    queryString += `WHERE ${where}
    `
  }

  return queryString;
};

/** creates a put query
   @params: table, properties (array of what to change)
   @return: queryString
*/
const makePutQuery = function (table, properties) {
  let queryString = `INSERT INTO ${table} (`;
  
  // adds $n as index for properties
  for(const property of properties) {
    if(properties.indexOf(property) > 0){
      queryString += ',';
    }
    queryString += `${property}`;
  }
  queryString += `) VALUES (`;
  
  for(const index in properties) {
    if(index > 0){
      queryString += ',';
    }    
    queryString += `$${parseInt(index) + 1}`;
  }
  queryString += `) RETURNING id`;

  return queryString;
};

const getQueryParams = function (table_obj) {
  let queryParams = [];

  for (const key in table_obj){
    queryParams.push(key);
  }

  return queryParams;
}


module.exports = {
  db_client,
  makeGetQuery,
  makePutQuery,
  getQueryParams
}