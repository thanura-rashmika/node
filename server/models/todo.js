var mongoose = require('mongoose');

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

module.exports = {Todo};
