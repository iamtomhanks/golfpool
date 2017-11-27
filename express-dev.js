var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const path = require('path');



var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};


app.use(bodyParser.urlencoded({
    extended: true
}));
  app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
  // console.log("Cookies :  ", req.cookies);

});

app.listen(5002);



var connection = mysql.createConnection({
  host     : 'lakeviewhomes.cofq1ovlapvc.us-east-1.rds.amazonaws.com',
  user     : 'lakeviewhomes',
  password : 'Dog8Cat%123',
  database : 'breeze'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
});
