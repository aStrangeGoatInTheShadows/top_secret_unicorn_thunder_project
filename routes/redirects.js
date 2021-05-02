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
    res.redirect("/");
  });

  app.get("/create_poll", (req, res) => {
    const templateVars = {
      message: "test",
    };
    res.render("create_poll", templateVars);
  });

  app.post("/create_poll", (req, res) => {
    const newLink = helpers.generateLink();
    const newPoll = {
      creator_id: 1,
      title: req.body.poll_title,
      description: req.body.poll_descr,
      admin_link: newLink + "/admin",
      survey_link: newLink,
      time_created: Date.now(),
      // time_closed: NULL, //time of vote completion(using as bool) //stretch
      // time_to_death: end_survey_time || NULL //countdown to poll //stretch
    }

    // dbFuncs.createPoll(newPoll)
    req.session.poll_id = 1;
    req.session.numPolls = req.body.poll_num_of_options;
    res.redirect("create_poll_options");
  });

  app.get("/create_poll_options", (req, res) => {
    const templateVars = {
      message: "test",
      numPolls: req.session.numPolls,
    };
    res.render("create_poll_options", templateVars);
  });
  return app;
};
