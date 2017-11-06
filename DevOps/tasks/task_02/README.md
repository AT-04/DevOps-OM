# RESTful API with Node.js, Express.js  and MongoDB.

## Installation

- Clone the repo: `git clone https://github.com/AT-04/DevOps-OM.git`
- Install dependencies: `npm install`
- On your terminal, execute MongoDB with:
```js
"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe"
```
- On your terminal, run  `npm run start`  this will start the server.
- The server will start at: http://localhost:3010

## RESTful API endpoints

### POST `/movie`

Create a new movie.

+ Method: `POST`
+ URL: `/movie`
+ Body:

```js
{
 "title": "Godzilla",
 "year": "2000"
}

```

Response body example:
```js
{
    "message": "Movie successfully added!",
    "movie": {
        "title": "Godzilla",
        "year": 2000,
        "_id": "5a005774c7df34021848b70c"
    }
}
```

### GET `/movie`

Get all movie.

+ Method: `GET`
+ URL: `/movie`
### GET `/movie/:movieId`

Get movie with specific id.

+ Method: `GET`
+ URL: `/movie/5a005774c7df34021848b70c`

Response body example:

```js
{
    "_id": "5a005774c7df34021848b70c",
    "title": "Godzilla",
    "year": 2000
}
```

### PUT `/movie/:movieId`

Update entire movie with specific id.

+ Method: `PUT`
+ URL: `/movie/5a005774c7df34021848b70c`
+ Body:

```js
{
 "title": "Godzilla 2000",
 "year": "2000"
}

```


### DELETE `/movie/:movieId`

Delete movie with specific id.

+ Method: `DELETE`
+ URL: `/movie/5a005774c7df34021848b70c`