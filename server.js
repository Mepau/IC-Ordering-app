const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

//passed as an argument
//const items = require('./routes/API/items');
//const orders = require('./routes/API/order');

const app = express();

// Bodyparser Middleware

app.use(express.json());

// DB configuration
const db = config.get('mongoURI');

// Connecto to DB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log('err'));

    //Use Routes
    //items route
    app.use('/API/items', require('./routes/API/items'));
    //users route
    app.use('/API/Users', require('./routes/API/users'));
    //Auth route
    app.use('/API/auth', require('./routes/API/auth'));

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
