'use strict';

var _ = require('lodash');
var restify = require('restify');
var FB = require('fb');
var https = require('restify-https');
var path = require('path');
var fs = require('fs');

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.fullResponse());
//server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(https({ override: false }));

/**
 * Create user
 */
server.post('/user', function(req, res) {
  var accessToken = req.params.accessToken;
  FB.setAccessToken(accessToken);
  FB.api("me", function(fbRes) {
    FB.api("10101177566993264/invitable_friends", function(fbRes) {
      console.log(fbRes);
    });
    var user = _.extend({ level:1 });
    res.send(201, user);
  });
});

var port = 8000;
console.log("Listening on port " + port);
server.listen(port);