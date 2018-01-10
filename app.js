var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var http = require('http');


//app.listen(3000, function () {
//    console.log('Gif Search listinging on port localhost:3000!');
//});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Home router, shows contents of home.handlebars
app.get('/', function (req, res) {
    console.log(req.query);
    res.render('home');
});

//Shows contents of hello-world.handlebars
app.get('/hello-world', function (req, res) {
    res.send('Hello World');
});

//Shows contents of hello-gif.handlebars
app.get('/hello-gif', function (req, res) {
    var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif';
    res.render('hello-gif', {gifUrl: gifUrl});
});

//Shows contents of greetings.handlebars
app.get('/greetings/:name', function (req, res) {
    var name = req.params.name;
    res.render('greetings', {name: name});
});

