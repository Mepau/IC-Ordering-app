const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const orderpackSchema = Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = orderpack = mongoose.model('orderpack', orderpackSchema);