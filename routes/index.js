var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo");

module.exports.Todo = require("./todo.js");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('views/index.html' , { root : __dirname});
});

module.exports = router;
module.exports = require("./todo.js");
