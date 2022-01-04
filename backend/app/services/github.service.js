const axios = require('axios');

exports.apiCallService = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

exports.mapResponse = (response, handle) => {
  const userInfo = {
    avatar_url: response.avatar_url,
    html_url: response.html_url,
    handle: handle,
    name: response.name,
    followers: response.followers,
    following: response.following,
    public_repos: response.public_repos,
    created_at: response.created_at
  };
  return userInfo;
};
