const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodeApp',(err, client) => {
    if(err) {
        console.log('Unable to Connect to MongoDB server');
    }
    console.log('Connected top MongoDB server');

    const db = client.db('nodeApp');

    // findAll
    /*db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos');
    });*/


    // find which are not completed
    /*db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos');
    });*/

    // find by ID
    /*db.collection('Todos').find({
        _id: new ObjectID('5cff351e661381157c797f19')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos');
    });*/

    // Todos Count
    /*db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count : ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos');
    });*/

    // get Users count whose name = Thanura
    /*db.collection('Users').find({name: 'Thanura'}).count().then((count) => {
        console.log(`Users : ${count}`);
    },(err) => {
        console.log('Unable to fetch the Count');
    });*/

    // get all User data of Users whose name = Rashmika
    /*db.collection('Users').find({name: 'Rashmika'}).toArray().then((docs) => {
        console.log(`Users : ${docs}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch the Users');
    });*/

    // client.close();
});
