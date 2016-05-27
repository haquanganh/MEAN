var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    routes = require('./app/routes/mainRoute');
var app = new express();
mongoose.connect('mongodb://127.0.0.1:27017/meanTestDB');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);
app.get('/*', function(req, res) {
    res.sendFile('public/index.html');
});
app.listen(3000, function() {
    console.log('Loading sever on port 3000 sucessfully');
});
