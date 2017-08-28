var express = require('express');
var router = express.Router();
var db = require('../db/index');
var Product = db.models.Product;
var Order = db.models.Order;


router.post('/:id/lineItems', function(req, res, next){
  Order.addProductToCart(req.body.productId * 1)
    .then( () => {
      res.redirect('/');
    })
    .catch(next);
});


router.delete('/:orderId/lineItems/:prodId', function(req, res, next){
  Order.detroyLineItem(req.params.orderId, req.params.prodId)
    .then( () => {
      res.redirect('/');
    })
    .catch(next);
})

router.put('/:id', function(req, res, next){
  Order.updateFromRequestBody(req.params.id, req.body)
    .then( () => {
      res.redirect('/');
    });
});


module.exports = router;
