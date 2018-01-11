var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TodoSchema = new Schema({
  task: String,
  description: String
});

var todo = mongoose.models('todo', TodoSchema);

module.exports.todo = '/todo.js';
