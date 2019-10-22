const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const itemSchema = Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const orderSchema = Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: null
    },
    id: {
        type: String,
        required: true
    },
    payMethod: {
        type: String,
        default: 'Efectivo'
    },
    payed:{
        type: Boolean,
        default: false
    }


});

module.exports = item = mongoose.model('item', itemSchema);
