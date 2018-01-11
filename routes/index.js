var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo");

module.exports.todo = require("./todo.js");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
module.exports = require("./todo.js");
