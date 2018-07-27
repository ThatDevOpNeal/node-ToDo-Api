const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose.js');
const { Todo } = require('./../server/models/todo.js');
const { User } = require('./../server/models/user.js');

// const id = '5b5a822eb58b1b29c07247fc11';

// if (!ObjectID.isValid(id)) {
//     return console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', JSON.stringify(todos, undefined, 2));
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo:', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('TodoById:', JSON.stringify(todo, undefined, 2));
// }).catch((err) => console.log(err));
const userId = '5b59f22fdf05fc112c953f6b';
User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
});
