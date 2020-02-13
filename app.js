const express = require('express');

const robot = require('./robot');
const view = require('./view');

const app = express();

console.log('Start robot');
const fanuc = robot.create();
fanuc.run();

console.log('Start server');
app.get('/', (req, res, next) => {
    res.send(view.status_view({
        value: fanuc.joints[0]
    }));
});

app.use((req, res, next) => {
    res.redirect('/');
});


app.listen(8080);