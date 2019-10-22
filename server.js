const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/API/items');


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

    //Use Routes
    app.use('/API/items', items);

    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Service started port: ${port}`));
