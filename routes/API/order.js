const express = require('express');
const router = express.Router();

// Item Model
const order = require('../../models/order');

// GET all items, public access
router.get('/', (req, res) => {
    order.find()
        //.sort({ date: -1})
        .then(order => res.json(order))
});

// POST create item, public access
router.post('/', (req, res) => {
    const newOrder = new item({
        //Add additional info for order
        name: req.body.name
    });
        newOrder.save().then(order => res.json(order));
});

// DEL item, public access
router.delete('/:id', (req, res) => {
    item.findById(req.params.id)
        .then(order => order.remove()
                          .then(() => res.json('Done')))
        .catch(err => res.status(404).json({success: false}));
});



module.exports = router;