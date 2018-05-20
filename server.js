var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var request = require('request');

app.engine('jade', require('jade').__express);

app.use(express.static(__dirname + '/'));

// app.use('/signin', express.static(__dirname + '/dist/signin.html'));
// app.use('/accept-invite', express.static(__dirname + '/dist/accept-invite.html'));
// app.use('/lock', express.static(__dirname + '/dist/lockscreen.html'));
// app.use('/download-app', express.static(__dirname + '/dist/download-app.html'));
// app.use('/reset-password', express.static(__dirname + '/dist/reset-password.html'));

app.use('/lib', express.static('bower_components'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(methodOverride());

app.listen(1001);
console.log("CMS is listening on port 1001");
