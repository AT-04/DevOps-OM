var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Movie = require('./api/models/movie'),
    bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movies_test');

app.use(bodyParser.json());

var routes = require('./api/routes/movie');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
