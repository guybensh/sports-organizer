const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello Worldddd!')
});

app.get('/users', (req, res) => {
    res.json({user1: {name: 'guy', gender: 'male'}, user2: {name: 'shlomit', gender: 'female'}})
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));