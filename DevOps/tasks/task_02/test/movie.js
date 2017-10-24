let Movie = require('../models/movie');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

describe('Movie', () => {
    beforeEach((done) => {
        Movie.remove({}, (err) => {
            done();
        });
    });

    describe('/POST Movie', () => {
        it('it should POST a movie ', (done) => {
            let movie = {
                title: "Back to the future",
                year: 1985
            };
            chai.request(server)
                .post('/movie')
                .send(movie)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Movie successfully added!');
                    res.body.movie.should.have.property('title', 'Back to the future');
                    res.body.movie.should.have.property('year', 1985);
                    res.body.movie.should.have.property('_id');
                    done();
                });
        });
        it('it should not POST a movie without year field', (done) => {
            let movie = {
                title: "The Lord of the Rings"
            };
            chai.request(server)
                .post('/movie')
                .send(movie)
                .end((err, res) => {
                    res.should.have.status(403);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors');
                    res.body.should.have.property('message').eql('Please enter title and year');
                    done();
                });
        });

    });

    describe('/GET Movie', () => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
                .get('/movie')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });


    describe('/GET/:id Movie', () => {
        it('it should GET a movie by the given id', (done) => {
            let movie = new Movie({
                title: "Scary Movie",
                year: 2000
            });
            movie.save((err, movie) => {
                chai.request(server)
                    .get('/movie/' + movie.id)
                    .send(movie)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('title');
                        res.body.should.have.property('year');
                        res.body.should.have.property('_id').eql(movie.id);
                        done();
                    });
            });

        });
    });

    describe('/PUT/:id Movie', () => {
        it('it should UPDATE a movie given the id', (done) => {
            let movie = new Movie({
                title: "Rocky I",
                year: 1906
            });
            movie.save((err, movie) => {
                chai.request(server)
                    .put('/movie/' + movie.id)
                    .send({
                        title: "Rocky I",
                        year: 1976
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Movie updated!');
                        res.body.movie.should.have.property('year').eql(1976);
                        done();
                    });
            });
        });
    });

    describe('/DELETE/:id Movie', () => {
        it('it should DELETE a movie given the id', (done) => {
            let movie = new Movie({
                title: "Rocky I",
                year: 1976
            });
            movie.save((err, movie) => {
                chai.request(server)
                    .delete('/movie/' + movie.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Movie successfully deleted!');
                        done();
                    });
            });
        });
    });
});
  