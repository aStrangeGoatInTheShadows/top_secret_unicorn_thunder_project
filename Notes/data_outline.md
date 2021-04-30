Data outline goes here


Polls 

id - pk
title - poll title - text
description - poll - text
Admin link - URL for admin to login and see poll
submsission link - URL to send to people to vote
created - timestamp - madatory
closed - timestamp - (if null, poll can be voted on)
open_until timestamp - Default NULL (asume open ended)

options table 
DESCRIPTION : this will be the choices available on a poll
pk - key, serial default
fk poll_id - links to polls table
title - text - A choice to vote on
rating - the sum of votes for a singular choice ***** FUNCTIONALITY  ************ if 10 options and user says this is their first choice then `rating += 10` if user says its their least favorite `rating +=1`

POLL_USERS
pk - key, serial default
fk - key, poll id - links to poll user joined
fk - key, user_id - links to user associated with the poll
admin_since - timestamp - if admin, since when
times_voted - integer - default 0, though likely created on vote. `if (times_voted > 0) console.log ('screw off tammy, you only get to vote once')`

