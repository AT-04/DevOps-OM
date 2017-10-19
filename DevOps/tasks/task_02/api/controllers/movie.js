'use strict';
var mongoose = require('mongoose'),
    Movie = mongoose.model('Movies');

exports
    .postMovie = function (req, res) {
    console.log("POST:", req.body);
    if (!req.body) {
        res
            .status(403)
            .json({error: true, message: 'Empty request'})
    }
    var new_movie = new Movie(req.body);
    new_movie
        .save(function (err, movie) {
            if (err) {
                res
                    .status(403)
                    .json({error: true, message: 'Params request'})
            }
            else {
                res.status(201)
                  .json({message: "Movie successfully added!", movie});
            }
        });
};

exports
    .getMovie = function (req, res) {
    Movie.findById(req.params.movieId, function (err, movie) {
        if (err) {
            res.send(err);
        }
        res.status(200)
            .json(movie);
    });
};

exports
    .getAllMovies = function (req, res) {
    Movie.find({}, function (err, movie) {
        if (err) {
            res.send(err);
        }
        res.json(movie);
    });
};
exports
    .putMovie = function (req, res) {
    console.log('PUT:id', req.params.id)
    if (!req.params.id && !req.body) {
        res
            .status(403)
            .json({error: true, message: 'Params empty'})
    }
    Movie.findOneAndUpdate({_id: req.params.movieId}, req.body, {new: true}, function (err, movie) {
        if (err) {
            res.send(err);
        }
        res.json(movie);
    });
};

exports
    .delMovie = function (req, res) {
    Movie.remove({
        _id: req.params.movieId
    }, function (err, movie) {
        if (err) {
            res.status(400)
                .json({
                    error: "Bad Request",
                    status: 400,
                    message: "Movie does not exist"
                });
        }
        else {
            res.status(200)
                .json({
                    message: 'Movie successfully deleted'
                });
        }
    });

};
