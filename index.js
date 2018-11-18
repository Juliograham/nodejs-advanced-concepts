const cluster = require('cluster');

const app = require('express')();

app.get('/', (req, res) => {
    res.send('Oh hai');
});

app.get('/fast', (req, res) => {
    res.send('This was fast, eh?');
});

app.listen(3000);

