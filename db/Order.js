var conn = require('./conn');
var Sequelize = conn.Sequelize;
var Product = require('./Product');
var LineItem = require('./LineItem');

const Order = conn.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN
  },
  address: {
    type: Sequelize.STRING
  }
});

Order.findCart = function(){
  return Order.findOne({
    where: {
      isCart: true
    }
  });
};

Order.addProductToCart = function(productId){
  return Order.findOrCreate({
    where: {
    isCart: true
    }
  })
  .spread( (cart, created) => {
      return LineItem.findOrCreate({
        where: {
          LIProdId: productId,
          orderId: cart.id
        }
      })
      .spread((lineItem, isCreated) => {
        lineItem.quantity++;
        return lineItem.save();
      });
    });

};


Order.getCartOrder = function(){
  return Order.findCart()
    .then( orderInCart => {
      if (orderInCart === null){
        return {id: 0};
      } else {
        return orderInCart;
      }
    });
};

Order.detroyLineItem = function(orderId, prodId){
  return LineItem.destroy({
    where: {
      orderId: orderId,
      LIProdId: prodId
    }
  });
};

Order.updateFromRequestBody = function(orderId, body){
  return Order.findOne({
    where: {
      id: orderId * 1
    }
  })
    .then((order) => {
      if (!body.address) {
        console.log('here!');
        throw new Error('address required');
      }
      return order.update(body);
    });
};

Order.findAllPlacedOrders = function(){
  return Order.findAll({
    where: {
      isCart: false
    },
    include: [Product]
  });
};

module.exports = Order;

