const db_client = require('../db.js');

const some_poll = {
  creator_id: 1,
  title: 'awesome poll',
  description: 'this is a description of our super awesome poll',
  admin_link: 'google.ca/figureitoutyourself',
  survey_link: 'lighthouselabs.ca',
  time_created: new Date(),
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
  INSERT INTO polls (creator_id, title, description, admin_link, survey_link, time_created, time_closed, time_to_death)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;  
  
  for(let key in poll) {
    queryParams.push(poll[key]);
  }  

  return db_client.query(queryString, queryParams);//.then((res) => res.rows);
};

put_new_poll(some_poll)
.then((result)=>{console.log('We succesfully added a new table')})
.catch(err => console.log('HOLY FUCK WHAT THE HELL HAPPENED with creating a new pole', err))
.finally(()=>{
  db_client.end();
  console.log('i closed the db connection so we dont hang');
});

exports.put_new_poll = put_new_poll;