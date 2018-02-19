var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var serverName = require('./config/server')
var config = require('./config/settings');

var homeRoute = require('./routes/home')();
var authRoute = require('./routes/auth')(config);
var productRoute = require('./routes/productRoute')(); 
var authenticate = require('./helpers/authenticate');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebar');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
//app.use(cors());

app.use('/auth', authRoute);
app.use('/', authenticate, homeRoute);
app.use('/product', authenticate, productRoute);

///error handler in expresss
app.use(function(err, req, res, next) {
    console.log('err handling middleware called ' + err.message);
    
	res.json({
		staus_code: err.status || 500,
		msg: err.message || err
	});
});


app.listen(4040, function(err, done){
    if(err){
        console.log("err starting server")
    }else {
        console.log("server started at port 4040");
    }
})
