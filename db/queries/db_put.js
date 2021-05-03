const { db_client } = require('db.js');

// const some_poll = {
//   title: 'awesome poll',
//   description: 'this is a description of our super awesome poll',
//   admin_link: 'google.ca/figureitoutyourself',
//   survey_link: 'lighthouselabs.ca',
//   time_created: Date.now(),
//   time_closed: null,
//   time_to_death: null
// }


/**
 * put new poll!
 * @param {} poll An object containing everything to setup a poll
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const put_new_poll = function (poll) {
  // 1
  const queryParams = [];
  // 2
  let queryString = `
  INSERT INTO polls (creator_id, title, description, admin_link, survey_link, time_created, time_to_death)
  VALUES($1, $2, $3, $4, $5, $6, 7$)`;  
  for(let key in poll) {
    queryParams.push(poll[key]);
  }

  // console.log(queryString ,queryParams);

  return client.query(queryString, queryParams);//.then((res) => res.rows);
};



exports.put_new_poll = put_new_poll;