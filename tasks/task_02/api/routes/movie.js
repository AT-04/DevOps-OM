'use strict';
module.exports = function (app) {
    var method = require('../controllers/movie');

    app
        .route('/movies')
        .get(method.getAllMovies)
        .post(method.postMovie);

    app
        .route('/movies/:movieId')
        .get(method.getMovie)
        .put(method.putMovie)
        .delete(method.delMovie);
};