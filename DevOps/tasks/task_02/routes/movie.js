let mongoose = require('mongoose');
let Movie = require('../models/movie');

function postMovie(req, res) {
    if (!req.body.title || !req.body.year) {
        res.status(403);
        res.json({errors: true, message: 'Please enter title and year'});
    }
    else {
        let new_movie = new Movie(req.body);
        new_movie.save((err, movie) => {
            if (err) {
                res.status(403);
                res.json({error: true, message: 'Params request'})
            }
            else {
                res.status(201);
                res.json({message: "Movie successfully added!", movie: movie});
            }
        });
    }
}

function getMovie(req, res) {
    Movie.findById(req.params.id, (err, movie) => {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200);
            res.json(movie);
        }
    });
}

function getAllMovies(req, res) {
    Movie.find({}, (err, movies) => {
        if (err) {
            res.send(err);
        }
        res.json(movies);
    });
}

function putMovie(req, res) {
    Movie.findById({_id: req.params.id}, (err, movie) => {
        if (err) {
            res.send(err);
        }
        Object.assign(movie, req.body).save((err, movie) => {
            if (err) {
                res.send(err);
            }
            else {
                res.json({message: 'Movie updated!', movie: movie});
            }
        });
    });
}

function deleteMovie(req, res) {
    Movie.remove({_id: req.params.id}, (err, result) => {
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
                    message: "Movie successfully deleted!"
                });
        }
    });
}

module.exports = {postMovie, getMovie, getAllMovies, putMovie, deleteMovie};
