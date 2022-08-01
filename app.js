const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes require()

const app = express();

const path = require('path');

const port = process.env.PORT || 8000 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(_dirname, 'build', 'index.html'))
    })
}

// "start": "PORT=8000 react-scripts start",

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port)
})