var express = require('express'),
	app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
})

app.use(function(req, res) {
	res.sensStatus(404);
})