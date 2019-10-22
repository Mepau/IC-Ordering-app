const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());

// DB configuration
const db = require('./config/keys').mongoURI;

// Connecto to DB
mongoose
    .connect(db)
    .then(() => console.log('DB Connected'))
    .catch(err => console.log('err'));

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log('Service started on port ${port}'));
