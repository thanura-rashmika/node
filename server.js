const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome Home'
    })
});

app.get('/test', (req, res) => {
    res.send({
        name: 'Thanura',
        hobbbies: [
            'Cycling',
            'Reading'
        ]
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle Request'
    })
});

app.listen(3000, () => {
    console.log('Server is Running on port 3000');
});
