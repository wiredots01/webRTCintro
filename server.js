var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.render('index.ejs');
});

var port = 3000;
app.listen(port, function() {
  console.log('listening to port: ' + port);
});