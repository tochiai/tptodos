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
prompt.get(['username', 'password'], function (err, creds) {
  github.authenticate({
    type: "basic",
    username: creds.username,
    password: creds.password
  });
  prompt.get(['org', 'repo', 'number'], function(err, pullInfo){
    var message = {
      user: pullInfo.org,
      repo: pullInfo.repo,
      number: pullInfo.number
    };
    github.pullRequests.get(message, function(err, data){
      if(err){
        throw err;
      } else {
        console.log(data);
      }
    });
  });
});
