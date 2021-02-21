const express = require('express');
const Order = require('../model/order');
const router = express.Router();

router.get("", (req, res, next) => {
    Order.find().then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(err);
    })
})

router.post("", (req, res, next) => {
    const order = new Order(req.body);
    order.save().then((result) => {
        res.status(201).json(result);
    }).catch((err) => {
        res.status(400).json(err);
    })
})

router.get("/:id", (req, res, next) => {
    Order.findOne({ _id: req.params.id }).then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(400).json(err);
    })
})

router.delete("/:id", (req, res, next) => {
    Order.deleteOne({ _id: req.params.id }).then((result) => {
        res.status(200).json({ "status": "Record deleted successfully."});
    }).catch((err) => {
        res.status(400).json(err);
    })
})

router.patch("/:id", (req, res, next) => {
    Order.updateOne({ _id: req.params.id }, { $set: req.body }).then((result) => {
        res.status(201).json({ "status": "Record updated successfully."});
    }).then((err) => {
        res.status(400).json(err);
    })
})

module.exports = router;
