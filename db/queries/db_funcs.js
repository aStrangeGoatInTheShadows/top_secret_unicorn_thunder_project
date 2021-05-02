/**returns all existing Links
   @params: none
   @return: [{survey,admin},{survey,admin},{survey,admin},{survey,admin}]
*/
getCurrLinks()
// IMPLIMIENTED AS PER REQUEST db_get.js getCurrLinks() ////////////////////////////////////////////////////////////////////////////////////////////

/**creates a poll and returns the id
   @params: poll: {
               creatorID,
               title,
               description,
               adminLink,
               surveyLink,
               timeCreated
            }
   @return: id of new poll
*/
createPoll(newPoll)
// IMPLIMIENTED AS PER REQUEST db_put.js put_new_poll(newPoll)////////////////////////////////////////////////////////////////////////////////////////////

/**takes a pollID and returns poll object
   @params: pollID: 1
   @return: {creatorID,
               title,
               description,
               adminLink,
               surveyLink,
               timeCreated
            };
*/
getPollData(pollID)
// IMPLIMIENTED AS PER REQUEST get.js getPollData(poll_id) ////////////////////////////////////////////////////////////////////////////////////////////

/**takes a pollID and returns array of pollOptions
   @params: pollID: 1
   @return: ["option1","option2","option3"]
*/
getPollOptions(pollID)
// IMPLIMIENTED AS PER REQUEST get.js getPollChoices(poll_id) ////////////////////////////////////////////////////////////////////////////////////////////

/**takes in array of the new options and the poll_id to add to
   @params:
   pollOptions:["option1","option2","option3"]
   pollID: 1
   @return: none
*/
insertPollOptions(pollOptions,pollID)

/**takes a pollID and returns array of pollOptions and ratings
   @params: pollID: 1
   @return: [{option1:10},{option2:20},{option3:145}]
*/
getPollRatings(pollID)

/**takes a pollID and returns array of pollOptions and ratings
   @params:pollRatings:[{option1:10},{option2:20},{option3:145}], pollID: 1
   @return: true/false for inserted or not
*/
insertPollRatings(pollRatings)