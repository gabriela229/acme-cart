var express = require('express');
var app = express();
var path = require('path');
var nunjucks = require('nunjucks');

nunjucks.configure('views', {
  express: app,
  noCache: true
});

app.set('view engine', 'html');
app.use('/vendors', express.static(path.join(__dirname, 'node_modules')));

app.use('/', require('./routes/orders'));

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
