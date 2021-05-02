const db_client = require('../db.js');

const some_poll = {
  creator_id: 1,
  title: 'awesome poll',
  description: 'this is a description of our super awesome poll',
  admin_link: 'google.ca/figureitoutyourself',
  survey_link: 'lighthouselabs.ca',
  time_created: Date.now(),
  time_closed: null,
  time_to_death: null
}


/**
 * put new poll!
 * @param {} poll An object containing everything to setup a poll
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const put_new_poll = function (poll) {
  console.log('creating a new poll');
  // 1
  const queryParams = [];
  // 2
  let queryString = `
  INSERT INTO polls (creator_id, title, description, admin_link, survey_link, time_created, time_to_death)
  VALUES(`;  
  // VALUES($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, 7$)`;  
  for(let key in poll) {
    queryParams.push(poll[key]);
  } 

  for(let param of queryParams) {
    if(typeof param === 'string'){
      queryString += `'${param}', `;
    } else {
      queryString += `${param}, `;
    }
  }
  queryString += `)`;

  console.log('here is our querystring', queryString);
  // console.log('here are the query params', queryParams);

  return db_client.query(queryString);//.then((res) => res.rows);
};

put_new_poll(some_poll)
.then((result)=>{console.log(result)})
.catch(console.log('HOLY FUCK WHAT THE HELL HAPPENED with creating a new pole'));

exports.put_new_poll = put_new_poll;