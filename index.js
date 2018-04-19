var express = require('express');
// this example uses express web framework so we know what longer build times
// do and how Dockerfile layer ordering matters. If you mess up Dockerfile ordering
// you'll see long build times on every code change + build. If done correctly,
// code changes should be only a few seconds to build locally due to build cache.

var morgan = require('morgan');
// morgan provides easy logging for express, and by default it logs to stdout
// which is a best practice in Docker. Friends don't let friends code their apps to
// do app logging to files in containers.

// Constants
const PORT = process.env.PORT || 4242;
// if you're not using docker-compose for local development, this will default to 8080
// to prevent non-root permission problems with 80. Dockerfile is set to make this 80
// because containers don't have that issue :)

// Api
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var routes = require('./api/routes/service_routes'); //importing route
routes(app); //register the route

app.listen(PORT);

console.log('Server listening on port ' + PORT);

app.use('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
