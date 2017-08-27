var db = require('./conn');
var Sequelize = db.Sequelize;

const LineItem = db.define('lineItem', {
  quantity: {
    type: Sequelize.INTEGER
  }
});

LineItem.getLineItemsInOrder = function(orderId){
  return LineItem.findAll({
    where: {
      orderId: orderId
    },
    include: ['LIProd']
  })
    .then( (lineItems) => {
      if (lineItems === null){
        return [];
      }
      return lineItems;
    });
};
module.exports = LineItem;
