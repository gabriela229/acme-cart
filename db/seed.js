module.exports = ({Product, Order, LineItem}) => {
  return Promise.all([
    Product.create({
      name: 'Rubber Ducky'
    }),
    Product.create({
      name: 'Striped Shirt'
    }),
    Product.create({
      name: 'Fish Bowl'
    }),
    Product.create({
      name: 'Silver Garbage Can'
    }),
    Product.create({
      name: 'Cookies'
    })
  ])
  .then(([RubberDuck, StripedShirt, FishBowl, GarbageCan, Cookies]) => {
    return [RubberDuck, StripedShirt, FishBowl, GarbageCan, Cookies];
  });
};
