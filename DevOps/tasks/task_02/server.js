const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Movie = require('./models/movie'),
    bodyParser = require('body-parser'),
    config = require('./config/index');

mongoose.Promise = global.Promise;
mongoose.connect(config.database).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/movieRoute');
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
