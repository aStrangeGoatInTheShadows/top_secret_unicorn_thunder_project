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
  let queryString = makePutQuery("polls", properties, queryParams, true);

  console.log('sendPollToDatabase query', queryString, queryParams);

  return db_client.query(queryString, queryParams);
};

// (1,'should i quit my job', 'where we should go', 'www.lifehouselab.ca', 'a fake link', CURRENT_TIMESTAMP , null)
// sendPollToDatabase(some_poll)
// .then(res => console.log(res.rows)) 
// .then(()=>{db_client.end()});

// //////////////////////////////// WORKING ABOVE TEST makePutQuery //////////////////


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
  let queryParams = [];
  for (let name of choice_names) {
    const param = [poll_id, name];
    queryParams.push(param);
  }

  // console.log(queryParams);

  const queryString = makePutQuery(
    "poll_choices",
    ["poll_id", "name"],
    queryParams,
    true
  );

  queryParams = queryParams.flat();

  console.log(queryString);
  return db_client.query(queryString, queryParams).then((res) => {
    if(res.rows[1])
    console.log("Put all choices returned these id slots", res.rows);
  });
};

// 
// @Alvin - are these the notes for a different function?
/**takes a pollID and returns array of pollOptions and ratings
   @params:pollRatings:[{option1:10},{option2:20},{option3:145}], pollID: 1
   @return: true/false for inserted or not
*/
const putPollRatings = function (pollRatings) {

}

// choice_names = [
//   "feet",
//   "leg",
//   "ass",
//   "grass",
//   "gas",
//   "french onion",
//   "worse survey ever",
// ];
// putAllPollChoices(choice_names, 2);

exports.put_new_poll = put_new_poll;
