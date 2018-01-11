var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TodoSchema = new Schema({
  task: String,
  description: String
});

var todo = mongoose.model('todo', TodoSchema);

module.exports.Todo = '/todo.js';
