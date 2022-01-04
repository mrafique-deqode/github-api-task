module.exports = app => {
  const github = require("../controllers/github.controller.js");

  var router = require("express").Router();

  // Retrieve all user repos
  router.get("/view1", github.getUserRepos);

  // Retrieve user info
  router.get("/view2", github.getUserInfo);

  app.use('/api/github', router);
};
