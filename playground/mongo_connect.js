// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/nodeApp', (err, client) => {
    if(err) {
        console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('nodeApp');

    db.collection('Todos').insertOne({
        text: 'Test Todo',
        completed: true,
    }, (err, result) => {
        if(err) {
            return console.log('Unable to Insert Todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    /*db.collection('Users').insertOne({
        name: 'Rashmika',
        age: 21,
        location: 'Horana'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to Insert User', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
        console.log(MongoClient);
    });*/

    client.close();
});
