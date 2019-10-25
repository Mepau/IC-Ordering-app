const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/API/items');
const orders = require('./routes/API/order');

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
    //app.use('/API/items', items);
    app.use('/API/items', items);

    //Attend to server when in production
    if(process.env.NODE_ENV === 'production') {
        //Set static folder
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }


    //Port
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Service started port: ${port}`));
