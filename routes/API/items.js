const express = require('express');
const router = express.Router();

const auth = require('../../middleWare/auth');

// Item Model
const item = require('../../models/item');

// GET all items, public access
router.get('/', (req, res) => {
    item.find()
        //.sort({ date: -1})
        .then(items => res.json(items))
});

// POST create item, private access
router.post('/', auth, (req, res) => {
    const newItem = new item({
        name: req.body.name
    });
        newItem.save().then(item => res.json(item));
});

// DEL item, private access
router.delete('/:id', auth, (req, res) => {
    item.findById(req.params.id)
        .then(item => item.remove()
                          .then(() => res.json('Done')))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;