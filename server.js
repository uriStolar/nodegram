var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//Directorio para servir archivos estaticos
app.use(express.static(__dirname + '/public'));
app.set('view  engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index.ejs');
});

app.listen(1337);
console.log('Server started');
