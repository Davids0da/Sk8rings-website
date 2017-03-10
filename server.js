var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));  
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); 
app.use('/fonts/', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
});