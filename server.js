var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    app     = express();


console.log(__dirname);

app.configure(function(){
  app.set('port', process.env.PORT || 9000);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/app'));
  app.use('/lib', express.static(__dirname + '/lib'));
});


//Routes
var _path = './app';

app.get('/', function (req, res) {
  res.sendfile(_path);
});

//All other routes
app.get('*', function (req, res) {
  res.sendfile(_path);
});

// Create the server
http.createServer(app).listen(app.get('port'), function() {
  console.log(":: Express server listening on port %s", app.get('port'));
});
