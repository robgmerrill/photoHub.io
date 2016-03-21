var express = require('express');
config = require('./server/configure'),
app = express(),
mongoose = require('mongoose');

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

mongoose.connect('mongodb://robgmerrill:giants11@ds021299.mlab.com:21299/photohubspace');
mongoose.connection.on('open', function() {
  console.log('Mongoose connected.');
});

// app.get('/', function(req, res) {
//   res.send('Hello World');
// });
var server = app.listen(app.get('port'), function() {
  console.log('Server up: http:locahost:' + app.get('port'));
});
