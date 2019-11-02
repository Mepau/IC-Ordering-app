const express = require("express");
const router = express.Router();

const auth = require("../../middleWare/auth");

// Orderpack Model
const orderpack = require("../../models/orderpack");

// GET all items, public access
router.get("/", (req, res) => {
  orderpack
    .find()
    //.sort({ date: -1})
    .then(orderpacks => res.json(orderpacks));
});

// POST create item, private access
router.post("/", auth, (req, res) => {
  const newOrderPack = new orderpack({
    name: req.body.name,
    username: req.body.username
  });
  newOrderPack.save().then(orderpack => res.json(orderpack));
});

// DEL item, private access
router.delete("/:id", auth, (req, res) => {
  orderpack
    .findById(req.params.id)
    .then(orderpack => orderpack.remove().then(() => res.json("Done")))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
