# RESTful API with Node.js, Express.js  and MongoDB.

## Installation

- Clone the repo: `git clone https://github.com/AT-04/DevOps-OM.git`
- Install dependencies: `npm install`
- On your terminal, execute MongoDB with:
```js
"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
```
- On your terminal, run  `npm run start`  this will start the server.
- The server will start at: http://localhost:3000

## RESTful API endpoints

### POST `/movies`

Create a new movie.

+ Method: `POST`
+ URL: `/movies`
+ Body:

```js
{
 "title": "Godzilla",
 "year": "2000"
}

```

### GET `/movies`

Get all movies.

+ Method: `GET`
+ URL: `/movies`
### GET `/movies/:movieId`

Get movie with specific id.

+ Method: `GET`
+ URL: `/movies/59e927911d70d0sdd12b019b35a`

### PUT `/movies/:movieId`

Update entire movie with specific id.

+ Method: `PUT`
+ URL: `/movies/59e927911d70d0sdd12b019b35a`
+ Body:

```js
{
 "title": "Godzilla 2000",
 "year": "2000"
}

```


### DELETE `/movies/:movieId`

Delete movie with specific id.

+ Method: `DELETE`
+ URL: `/movies/59e927911d70d0sdd12b019b35a`