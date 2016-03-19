var path = require('path');
var routes = require('./routes');
var exphbs = require('express-handlebars');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');

module.exports = function(app) {
app.use(morgan('dev'));
   app.use(bodyParser({
       uploadDir:path.join(__dirname, 'public/upload/temp')
}));
  app.use(methodOverride());
  app.use(cookieParser('some-secret-value-here'));
  routes(app);
  app.use('/public/', express.static(path.join(__dirname, '../public')));


if('development' === app.get('env')) {
  app.use(errorHandler());
}
  app.engine('handlebars', exphbs.create({
    defaultLayout: 'main', 
    layoutsDir: app.get('views') + '/layouts',
    partialsDir: [app.get('views') + '/partials']
  }).engine);
  app.set('view engine', 'handlebars');
  return app;
};
