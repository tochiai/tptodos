var GitHubApi = require("github");
var prompt = require('prompt');

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    timeout: 5000
});

prompt.start();
prompt.get(['username', 'password'], function (err, result) {
  github.authenticate({
    type: "basic",
    username: result.username,
    password: result.password
  });
});
