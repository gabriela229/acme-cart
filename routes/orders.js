var express = require('express');
var router = express.Router();
var db = require('../db/index');
var Product = db.models.Product;
var Order = db.models.Order;


router.post('/:id/lineItems', function(req, res, next){

  return Order.addProductToCart(req.body.productId * 1)
    .then( () => {

      res.redirect('/');
    })
    .catch(next);
});

module.exports = router;
