const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

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
        default: ""
    },
    payMethod: {
        type: String,
        default: "Efectivo"
    },
    payed:{
        type: Boolean,
        default: false
    }

});

module.exports = order = mongoose.model('order', orderSchema);
