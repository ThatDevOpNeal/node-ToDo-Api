//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server', err);
        return;
    }

    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({ text: "Eat lunch" }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({ text: "Eat lunch" }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    //deleteMany Users
    db.collection('Users').deleteMany({ name: 'Neal' });

    //findOneAndDelete Users
    db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b5890419b7a824444e5b4cf") }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //client.close();
});
