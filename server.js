var app = require('./app');
var db = require('./db');

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`);
  return db.sync()
    .then(function(){
      db.seed();
  });
});
