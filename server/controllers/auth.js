const axios = require('axios');
const { GH_CLIENT_ID, GH_CLIENT_SECRET } = require('../env');

class AuthController {
  createGithubToken(req, res, next) {
    const code = req.query.code;
    const url = `https://github.com/login/oauth/access_token?code=${code}&client_id=${GH_CLIENT_ID}&client_secret=${GH_CLIENT_SECRET}`;
    return axios
      .post(
        url,
        {},
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      .then((response) => {
        res.locals.githubToken = response.data.access_token;
        next();
      })
      .catch((err) => {
        next(err);
      });
  }

  extractGithubToken(req, res, next) {
    const githubToken = req.get('Authorization').split(' ')[1];
    if (githubToken) {
      res.locals.githubToken = githubToken;
    }
    next();
  }

  getGithubUser(req, res, next) {
    return axios
      .get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${res.locals.githubToken}`,
        },
      })
      .then((response) => {
        res.locals.githubUser = response.data;
        next();
      })
      .catch((err) => {
        next(err);
      });
  }
}

const authController = new AuthController();

module.exports = {
  authController,
};
