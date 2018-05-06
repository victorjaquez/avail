const express = require('express');
const router = express.Router();
const Coin = require('../models/Coin.js');

// Index
router.get('/', (req,res)=> {
  Coin.find({}, (err, foundCoins)=>{
    res.json(foundCoins)
  });
});

// Create
router.post('/', (req, res)=> {
  Coin.create(req.body, (err, createdCoin)=>{
    res.json(createdCoin)
  });
});

// Delete
router.delete('/:id', (req,res)=> {
  Coin.findByIdAndRemove(req.params.id, (err, deletedCoin)=>{
    res.json(deletedCoin);
  });
});

// Update
router.put('/:id', (req,res)=> {
  Coin.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCoin)=>{
    res.json(updatedCoin)
  });
});


module.exports = router;
