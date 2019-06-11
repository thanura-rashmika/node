var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false //default will be assigned if we never assigned values
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Cook Dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved Todo', doc);
}, (err) => {
    console.log('Unable to save Todo');
});

/*new Todo({
    text: 'Feed the Cat',
    completed: false,
    completedAt: 123,
}).save().then((doc) => {
    console.log('Saved Todo', doc);
}, (err) => {
    console.log('Unable to save Todo');
});*/

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
    }
});

var newUser = new User({
    email: 'test@test.com',
});

newUser.save().then((doc) => {
    console.log('Saved User', doc);
}, (err) => {
    console.log('Unable to Save User');
});
