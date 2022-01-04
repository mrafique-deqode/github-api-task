module.exports = (sequelize, Sequelize) => {
  const GithubUser = sequelize.define("githubuser", {
    avatar_url: {
      type: Sequelize.STRING,
    },
    html_url: {
      type: Sequelize.STRING
    },
    handle: {
      type: Sequelize.STRING,
      unique: true
    },
    name: {
      type: Sequelize.STRING
    },
    followers: {
      type: Sequelize.INTEGER
    },
    following: {
      type: Sequelize.INTEGER
    },
    public_repos: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.STRING
    }
  });

  return GithubUser;
};
