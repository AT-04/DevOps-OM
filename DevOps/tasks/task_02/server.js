let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let port = 3010;
let movie = require('./routes/movie');
let config = require('./config/db');

mongoose.Promise = global.Promise;
mongoose.connect(config.database).then(
    () => {
        console.log('Database is connected')
    },
    err => {
        console.log('Can not connect to the database' + err)
    }
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/json'}));

app.get("/", (req, res) => res.json({message: "Welcome to our Movie Store!"}));

app.route("/movie")
    .get(movie.getAllMovies)
    .post(movie.postMovie);
app.route("/movie/:id")
    .get(movie.getMovie)
    .delete(movie.deleteMovie)
    .put(movie.putMovie);

app.listen(port);

console.log('RESTful API server started on: ' + port);

module.exports = app;