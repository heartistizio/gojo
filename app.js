var express = require('express');
var app = express();
const PORT = 3000;

app.get('/', function middleware(req, res) {
	res.send('Hello Janusz!');
});

app.get('/teapot', function middleware(req, res) {
	res.status(418)
	res.setHeader("X-Teapot", "white")
	res.send('I am tepot!');
});

app.listen(PORT, function logger() {
	console.log(`App running on port ${PORT}`);
});
