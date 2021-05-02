const cookieSession = require('cookie-session');
const express = require('express');
const helpers = require('../lib/helpers');
// const dbFuncs = require('../lib/db');

const app = express();
app.use(cookieSession({
  name: 'session', keys: ["secret", "keys"], maxAge: (24 * 60 * 60 * 1000) //max age 24hrs
}));

module.exports = (db) => {
  /* redirects home and index to index */
  app.get("/index", (req, res) => {
    res.redirect("/");
  });
  app.get("/home", (req, res) => {
    helpers.happyRedirect(res, req, "/");
  });

  app.get("/create_poll", (req, res) => {
    const templateVars = {
      message: "test",
    };
    helpers.happyRender(res, req, "create_poll", templateVars);
  });

  app.post("/create_poll", (req, res) => {
    const newLink = helpers.generateLink();
    const newPoll = {
      creator_id: 1,
      title: req.body.poll_title,
      description: req.body.poll_descr,
      adminLink: newLink + "/admin",
      surveyLink: newLink,
      timeCreated: Date.now(),
      timeClosed: null, //time of vote completion(using as bool) //stretch
      timeToDeath: null //countdown to poll //stretch
    }

    // req.session.poll_id = dbFuncs.createPoll(newPoll)
    /* set cookies */
    req.session.pollID = 1;
    req.session.numPolls = req.body.poll_num_of_options;
    req.session.adminLink = newLink + "/admin";
    req.session.surveyLink = newLink;

    helpers.happyRedirect(res, req, "create_poll_options");
  });

  app.get("/create_poll_options", (req, res) => {
    if (!req.session.numPolls) {
      req.session.numPolls = 2;
    }
    const templateVars = {
      numPolls: req.session.numPolls,
    };
    helpers.happyRender(res, req, "create_poll_options", templateVars);
  });

  app.post("/create_poll_options", (req, res) => {
    const pollOptions = [];
    for (const item in req.body) {
      pollOptions.push(req.body[item]);
    }

    // insertPollOptions(pollOptions, req.session.poll_id);

    helpers.happyRedirect(res, req, "poll_created");
  });

  app.get("/poll_created", (req, res) => {
    const templateVars = {
      adminLink: req.session.adminLink,
      surveyLink: req.session.surveyLink,
    };

    helpers.happyRender(res, req, "poll_created",templateVars);
  });
  return app;
};
