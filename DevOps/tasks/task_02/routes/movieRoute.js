'use strict';
module.exports = function (app) {
    var method = require('../controllers/movieController');

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
