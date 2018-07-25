//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server', err);
        return;
    }

    console.log('Connected to MongoDB server');
    // const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //     name: 'Neal',
    //     age: 24,
    //     location: 'Chicago'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('users collection err: ', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         console.log('Unable to insert Todo: '. err);
    //         return;
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });



    client.close();
});
