var express = require('express');
config = require('./server/configure'),
app = express();

app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

// app.get('/', function(req, res) {
//   res.send('Hello World');
// });
var server = app.listen(app.get('port'), function() {
  console.log('Server up: http:locahost:' + app.get('port'));
});
