/**returns all existing Links
   @params: none
   @return: [{survey,admin},{survey,admin},{survey,admin},{survey,admin}]
*/
getCurrLinks()

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

/**takes a pollID and returns array of pollOptions
   @params: pollID: 1
   @return: ["option1","option2","option3"]
*/
getPollOptions(pollID)

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
