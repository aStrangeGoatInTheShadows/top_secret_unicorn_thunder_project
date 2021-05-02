const { db_client, makePutQuery, getQueryParams } = require("../db.js");

const some_poll = {
  creator_id: 1,
  title: "awesome poll",
  description: "this is a description of our super awesome poll",
  admin_link: "google.ca/figureitoutyourself",
  survey_link: "lighthouselabs.ca",
  time_created: new Date(),
  time_closed: null,
  time_to_death: null,
};

/**
 * sendPollToDatabase
 * @param {} poll An object containing everything to setup a poll
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const sendPollToDatabase = function (poll) {
  console.log("creating a new poll");

  const queryParams = [];

  for (const key in poll) {
    queryParams.push(poll[key]);
  }

  const properties = [
    "creator_id",
    "title",
    "description",
    "admin_link",
    "survey_link",
    "time_created",
    "time_closed",
    "time_to_death",
  ];
  let queryString = makePutQuery("polls", properties);

  return db_client.query(queryString, queryParams);
};

/**
 * put_new_poll
 * @param {} some_poll An object containing everything to setup a poll
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const put_new_poll = function (some_poll) {
  return sendPollToDatabase(some_poll)
    .then((res) => {
      console.log("added new poll to db with id:", res.rows[0].id);
      return res.rows[0].id;
    })
    .catch((err) =>
      console.log(
        "HOLY FUCK WHAT THE HELL HAPPENED with creating a new pole",
        err
      )
    );
};

/**takes in array of strings TO BE THE OPTION NAMES and the poll_id to add to
   @params:
   pollOptions:["option1","option2","option3"]
   pollID: 1
   @return: none
*/
const putAllPollChoices = function (choice_names, poll_id) {
  const queryStrings = [];
  const queryParams = []

  for(const name of choice_names) {
    queryStrings.push(makePutQuery("poll_choices", ['poll_id', 'name']));
    queryParams.push([poll_id], name);
  }
 //////////////////////////////////////////// YOUR WORKING HERE ////////////////////////////////////////////
 //////////////////////////////////////////// HERE ////////////////////////////////////////////  
  for(let i = 0; i < queryParams.length; i++) {
    console.log('this ran',queryStrings[i],queryParams[i]);
    db_client.query(queryStrings[i],queryParams[i])
      .then(res => console.log(res))
      .catch((err)=>{console.log('you fucked up on loop',i,err)})
  }

  console.log(queryStrings);
};

choice_names = ["food", "drink", "bar", "bar", "poop"];
putAllPollChoices(choice_names, 7);

exports.put_new_poll = put_new_poll;

// const makePutQuery = function (table, properties) {
//   let queryString = `INSERT INTO ${table} (`;

//   // adds $n as index for properties
//   for(const property of properties) {
//     if(properties.indexOf(property) > 0){
//       queryString += ',';
//     }
//     queryString += `${property}`;
//   }
//   queryString += `)
//   VALUES (`;
//   for(const index in properties) {
//     if(index > 0){
//       queryString += ',';
//     }
//     queryString += `$${parseInt(index) + 1}`;
//   }
//   queryString += `)
//   RETURNING id`;

//   return queryString;
// };
