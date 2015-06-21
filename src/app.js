'use strict';

var _ = require('lodash');
var restify = require('restify');
var FB = require('fb');
var path = require('path');
var fs = require('fs');
var db = require('./services/database');
var locations = require('./models/Locations').instance;
var LocationController = require('./controllers/LocationController');

var server = restify.createServer();
server.use(restify.CORS());
server.use(restify.fullResponse());
//server.use(restify.gzipResponse());
server.use(restify.bodyParser());

//db.connect('mongodb://localhost/react-gulp-try');
//loadInLocations();

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

/*
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
*/

server.post('/favorites', function(req, res) {
    var id = req.params.id;
    var location = locations.findById(id);  // TODO: Keep it simple for now, no DB
    if (location) {
        LocationController.setLocationHasFavorite(location, true, function(result) {
            if (result.success) {
                res.send(200, location);
            }
            else if (error) {
                res.send(500, error);
            }
            else {
                res.send(204);
            }
        });
    }

    /*
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
    */
});

var port = process.env.PORT || 9000;
console.log("Listening on port " + port);
server.listen(port);

/*
function loadInLocations() {
    db.models.Location(function (err, alreadySavedLocations) {
        if (!alreadySavedLocations) {
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
*/