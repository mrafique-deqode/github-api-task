const db = require("../models");
const GithubUser = db.githubusers;
const constants = require('../constants');
const GithubService = require('../services/github.service');

// Retrieve all repos from the github.
exports.getUserRepos = async (req, res) => {
  const { handle, page=1 } = req.query;
  // page and per_page
  // const page = 1
  const pp = 10
  const getLength = `https://api.github.com/users/${handle}`
  const url = `${constants.BASE_URL}${handle}/repos?page=${page}&per_page=${pp}`;
  try {
    const response = await GithubService.apiCallService(url);
    const length = await GithubService.apiCallService(getLength);
    const repoLength = length.public_repos
    return res.send({response, repoLength});
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving repos."
    });
  }
};

// Retrieve all repos from the github.
exports.getUserInfo = async (req, res) => {
  const { handle } = req.query;
  const url = `${constants.BASE_URL}${handle}`;

  try {
    const data = await GithubUser.findAll({ where: { handle } });
    if (data.length) {
      res.send(data[0]);
    } else {
      const response = await GithubService.apiCallService(url);
      if (response) {
        // Create a User
        const userInfo = GithubService.mapResponse(response, handle);

        // Save User in the database
        const data = await GithubUser.create(userInfo);
        res.send(data);
      } else {
        return res.send(null);
      }
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving user info."
    });
  }
};
