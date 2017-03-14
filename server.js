var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var index = require('./routes/index');
var bodyParser = require("body-parser");
var compression = require('compression');

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/fonts/', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;

  smtpTrans = nodemailer.createTransport({
    service: 'Gmail', 
        auth: {
          user: 'sodakolor@gmail.com',
          pass: 'davidsodadavidsoda12345'
        }
  });
    mailOpts = {
    to: 'sodakolor@gmail.com',
    subject: 'Sk8rings Website Customers',
    text: `${req.body.name}\n\n <${req.body.email}>\n\n${req.body.text}`
  };
  smtpTrans.sendMail(mailOpts);

res.sendFile(path.join(__dirname + '/views/contact.html'));
});
var port = process.env.PORT || 5000
app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
});


