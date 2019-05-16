
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , puzzle = require('./routes/puzzle')
  , http = require('http')
  , fs = require('fs')
  , path = require('path');

var router_gary = require('./routes/gray')

var app = express();

// all environments
app.set('port', process.env.PORT || 3001 );
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use('/favicon_kt.ico', express.static('public/image'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index );
app.get('/users', user.list);
app.post('/users', user.list);

app.get('/puzzle', puzzle.data);

//vvvvvvvvvvvvvvvvvvvvvvvvvvvv
app.get('/gray', router_gary.gray );
app.get('/gray1', router_gary.gray_1 );
app.post('/gray2', router_gary.gray_2 );
app.get('/grayt', router_gary.gray_t );
app.get('/graym', router_gary.gray_m );
app.get('/grayb', router_gary.gray_b );
app.get('/grayp', router_gary.gray_p );
app.get('/grayf', router_gary.gray_f );




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
