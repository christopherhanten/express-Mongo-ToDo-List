// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var todo_list = [
  {
    task: "Read 30 minutes",
    description: "Unless it's past 23:00 and then read 15 minutes",
    dateAdded: "01/10/18"
  },
  {
    task: "Wash dishes",
    description: "It's my turn",
    dateAdded: "01/10/18"
  },
  {
    task: "Take selfie",
    description: "For selfie 365",
    dateAdded: "1/10/18"
  },
];

// remove all records that match {} -- which means remove ALL records
db.todo_list.remove({}, function(err, todo_list){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all todo_list');

    // create new records based on the array todo_list
    db.todo_list.create(todo_list, function(err, todo_list){
      if (err) { return console.log('err', err); }
      console.log("created", todo_list.length, "todo_list");
      process.exit();
    });
  }
});
