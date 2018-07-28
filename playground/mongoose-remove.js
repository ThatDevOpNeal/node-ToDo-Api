const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose.js');
const { Todo } = require('./../server/models/todo.js');
const { User } = require('./../server/models/user.js');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: "5b5bbae44746c7fd1e2bad07"}).then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});

Todo.findByIdAndRemove("5b5bbae44746c7fd1e2bad07").then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});
