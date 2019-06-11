const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodeApp', (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('nodeApp');

    // delete All users with the name = Rashmika
    /*db.collection('Users').deleteMany({name: 'Rashmika'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete Users');
    });*/

    // delete only one User with the name = Thanura
    /*db.collection('Users').deleteOne({name: 'Thanura'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete Users');
    });*/

    // find the record and delete
    /*db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
        console.log(result);
    });*/

    // Practise Session
    /*db.collection('Todos').deleteMany({text: 'Some Todo' , completed: true}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to Delete Todos');
    });*/

    /*db.collection('Todos').deleteOne({text: 'Some Todo'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to Delete Todo');
    });*/

    /*db.collection('Todos').findOneAndDelete({_id: new ObjectID('5cff4329c3a1f81c6940d01c')}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to Find and Delete');
    });*/
});
