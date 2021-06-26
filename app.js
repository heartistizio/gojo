var express = require('express');
var app = express();
const PORT = 3000;

app.get('/', function middleware(req, res) {
	res.send('Hello Janusz!');
});

app.listen(PORT, function logger() {
	console.log(`App running on port ${PORT}`);
});
