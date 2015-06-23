'use strict';

var _ = require('lodash');
var restify = require('restify');
var FB = require('fb');
var path = require('path');
var fs = require('fs');
var db = require('./services/database');

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.fullResponse());
//server.use(restify.gzipResponse());
server.use(restify.bodyParser());

// Use different URL for development and production
if (process.env.MONGOLAB_URI) {
    db.connect(process.env.MONGOLAB_URI);
}
else {
    db.connect('mongodb://localhost/react-gulp-try');
}

loadInLocations();

/**
 * Create user
 */
server.post('/user', function(req, res) {
    var accessToken = req.params.accessToken;
    FB.setAccessToken(accessToken);
    FB.api("me", function(fbRes) {
    var user = _.extend({ level:1 }, fbRes);
        res.send(201, user);
    });
});

server.get('/locations', function(req, res) {
    db.models.Location.find(function(err, locations) {
        res.send(locations);
    });
});

server.get('/favorites', function(req, res) {
    db.models.Favorite.find(function(err, favorites) {
        console.log(favorites);
        res.send(favorites);
    });
});

server.post('/favorites', function(req, res) {
    var id = req.params.id;
    db.models.Location.findById(id, function(err, location) {
        if (location) {
            location.has_favorite = true;
            location.save(function(err, favorite) {
                if (err) {
                    res.send(500, err.toString());
                }
                else {
                    res.send(201, favorite);
                }
            });
            var favorite = new db.models.Favorite();
            favorite.location = id;
            favorite.save(function(err, favorite) {
                if (err) {
                    res.send(500, err.toString());
                }
                else {
                    res.send(201, favorite);
                }
            });
        }
        else if (err) {
            res.send(500, err.toString());
        }
    });
});

var port = process.env.PORT || 9000;
console.log("Listening on port " + port);
server.listen(port);

function loadInLocations() {
    db.models.Location.find(function (err, alreadySavedLocations) {
        if (!alreadySavedLocations || alreadySavedLocations.length === 0) {
            var locations = require('./locations').map(function(loc) {
                return new db.models.Location({_id: loc.id, name: loc.name });
            });
            locations.forEach(function(loc) {
                loc.save(function(err) {
                    if (err) {
                        console.error(err.toString());
                    }
                });
            });
        }
    });
}