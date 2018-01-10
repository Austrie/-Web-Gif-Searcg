var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var giphy = require('giphy-api')();

//No longer using http using actual GIPHY API
//var http = require('http');


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Home router, shows contents of home.handlebars
app.get('/', function (req, res) {
    giphy.search(req.query.term, function (err, response) {
        res.render('home', {gifs: response.data});
    });
    
    //No longer using HTTP method, using actual GIPHY API
//    console.log(req.query.term)
//    var queryString = req.query.term;
//    // Encode the query string to remove white spaces and restricted characters
//    var term = encodeURIComponent(queryString);
//    //Put the search term into the giphy api search url
//    var url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC';
//    
//    http.get(url, function(response) {
//        //Set encoding of response to UTF8
//        response.setEncoding('utf8');
//        var body = '';
//        response.on('data', function(d) {
//            //Continuously update stream with data from giphy
//            body += d;
//        });
//        
//        response.on('end', function () {
//            //When data is fully received parse into json
//            var parsed = JSON.parse(body);
//            //Render the home template and pass the gif data in to template
//            res.render('home', {gifs: parsed.data});
//        });
//        
//    });
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

