var express = require('express');
var app = express();
var path = require('path');
var nunjucks = require('nunjucks');
var db = require('./db/index');
var Product = db.models.Product;
var Order = db.models.Order;
var LineItem = db.models.LineItem;
var bodyParser = require('body-parser');


nunjucks.configure('views', {
  express: app,
  noCache: true
});

app.set('view engine', 'html');
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/orders', require('./routes/orders'));

app.get('/', function(req, res, next){
  return Promise.all([
    Product.findProductViewModel(),
    Order.getOrder()
  ])
    .then( ([productArr, order]) => {
      return LineItem.getLineItemsInOrder(order.id)
        .then( LineItemsInCart => {
          return res.render('index', {productArr, order, LineItemsInCart});
        });
    })
    .catch(next);
});

module.exports = app;
