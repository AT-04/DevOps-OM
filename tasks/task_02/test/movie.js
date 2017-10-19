"use strict"
let request = require('supertest-as-promised')
const _ = require('lodash')
const api = require('../app')
const host = api

request = request(host)

describe('The movie route', function () {

    describe('A request to post', function () {
        it('Should create a movie', function (done) {
            let movie = {
                'title': 'Back to the future',
                'year': '1985'
            }
            request
                .post('/movie')
                .set('Accept', 'application/json')
                .send(movie)
                .expect(201)
                .expect('Content-Type', /application\/json/)
                .end((err, res) => {
                    let body = res.body
                    expect(body).to.have.property('movie')
                    movie = body.movie
                    expect(movie).to.have.property('title', 'Back to the future')
                    expect(movie).to.have.property('year', '1985')
                    expect(movie).to.have.property('_id')
                    done(err)
                })
        })
    })

    describe('Request- Get All', function () {
        it('You should get all the movies', function (done) {
            let movie_id
            let movie = {
                'title': 'Back to the future',
                'year': '1985'
            }
            let movie2 = {
                'title': 'Back to the future 2',
                'year': '1989'
            }
            request
                .post('/movie')
                .set('Accept', 'application/json')
                .send(movie)
                .expect(201)
                .expect('Content-Type', /application\/json/)
                .then((res) => {
                    let movie_id = res.body.movie._id
                    return request
                        .post('/movie')
                        .set('Accept', 'application/json')
                        .send(movie2)
                        .expect(201)
                        .expect('Content-Type', /application\/json/)
                })
                .then((res) => {
                    let movie2_id = res.body.movie._id
                    return request
                        .get('/movie')
                        .set('Accept', 'application/json')
                        .expect(200)
                        .expect('Content-Type', /application\/json/)
                })
                .then((res) => {
                    let body = req.body

                    expect(body).to.have.property('movies')
                    expect(body.movies).to.be.an('array')
                        .and.to.have.length.above(2)

                    let movies = body.movies
                    movie = _.find(movies, {_id: movie_id})
                    movie2 = _.find(movies, {_id: movie2_id})

                    expect(movie).to.have.property('_id', movie_id)
                    expect(movie).to.have.property('title', 'Back to the future')
                    expect(movie).to.have.property('year', '1985')

                    expect(movie2).to.have.property('_id', movie2_id)
                    expect(movie2).to.have.property('title', 'Back to the future 2')
                    expect(movie2).to.have.property('year', '1989')

                    done()
                }, done())
        })
    })

    describe('Request GET /:id', function () {
        it('You should only get the movie', function (done) {
            let movie_id
            let movie = {
                'title': 'Scary Movie',
                'year': '2000'

            }
            request
                .post('/movie')
                .set('Accept', 'application/json')
                .send(movie)
                .expect(201)
                .expect('Content-Type', /application\/json/)
                .then((res) => {
                    let movie_id = res.body.movie._id
                    return request
                        .get('/movie/' + movie_id)
                        .set('Accept', 'application/json')
                        .expect(200)
                        .expect('Content-Type', /application\/json/)

                })
                .then((res) => {
                    let body = res.body
                    expect(body).to.have.property('movie')
                    movie = boby.movie
                    expect(movie).to.have.property('_id', movie_id)
                    expect(movie).to.have.property('title', 'Scary Movie')
                    expect(movie).to.have.property('year', '2000')
                    done()
                }, done())
        })
    })

    describe('Request PUT: /movie', function(){
        it('You should modify a movie', function(done){
            let movie_id
            let movie = {
                'title': 'Rocky I',
                'year': '1976'

            }
            request
                .post('/movie')
                .set('Accept', 'application/json')
                .send(movie)
                .expect(201)
                .expect('Content-Type', /application\/json/)
                .then((res) => {
                    let movie_id = res.body.movie._id
                    return request
                        .put('/movie/' + movie_id)
                        .set('Accept', 'application/json')
                        .expect(200)
                        .expect('Content-Type', /application\/json/)

                })
                .then((res) => {
                    let body = res.body

                    expect(body).to.have.property('movie')
                    movie = boby.movie

                    expect(movie).to.have.property('_id', movie_id)
                    expect(movie).to.have.property('title', 'Rocky I')
                    expect(movie).to.have.property('year', '1976')
                    done()
                }, done())
        })
    })
    describe('Movie DELETE',function () {
        it('I should delete a movie',function (done) {
            let movie_id
            let movie = {
                'title': 'Rocky I',
                'year': '1976'

            }
            request
                .post('/movie')
                .set('Accept', 'application/json')
                .send(movie)
                .expect(201)
                .expect('Content-Type', /application\/json/)
                .then((res) => {
                    let movie_id = res.body.movie._id
                    return request
                        .delete('/movie/' + movie_id)
                        .set('Accept', 'application/json')
                        .expect(400)
                        .expect('Content-Type', /application\/json/)

                })
                .then((res) => {
                    let body = res.body

                    expect(body).to.be.empty

                    done()
                }, done())
        })

    })

    
})