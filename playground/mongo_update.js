const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodeApp', (err, client) => {
    if(err) {
        console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('nodeApp');

    // find one Todo by ID and Update it
    /*db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5cff43340e08581c946c12b9')
        }, {
            $set: {
                completed: false,
            }
        }, {
            returnOriginal: false,
        }).then((result) => {
            console.log(result);
    }, (err) => {
            console.log('Unable to Update Todo');
    });*/

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5cff38a3e840691734b895ea')
        }, {
            $set: {
                name: 'Rashmika',
            },
            $inc: {
                age: -1,
            }
        }, {
            returnOriginal: false,
        }).then((result) => {
            console.log(result);
    }, (err) => {
            console.log('Unable to Update User');
    })
});
