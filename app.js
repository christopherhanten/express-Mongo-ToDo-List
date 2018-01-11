var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/todo-app');

var express = require('express');
var path    = require('path');
var favicon = require('serve-favicon');
var logger  = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var db = require('/models')

var app   = express();
///////////Routes///////////////
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});
var index = require('./routes/index');
//var users = require('./routes/users');
var todo  = require('./models/todo');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//initialize variable to use for our environment port
var port= 3000;

app.listen(port, ()=> {
  console.log(`App is locked and loaded on ${port}`);
});


module.exports = app;

// db.todo.insert ({
//   task       : "clean the glass",
//   description: "use the dang ole windex",
//   dateAdded  : "01/09/2017"
// })
