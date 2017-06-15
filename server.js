// requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./modules/routes/index'); // this will connect our route to index.js

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extedned:true}));
app.use('/', index); // this looks for our route to index.js

//globals
var port = process.env.PORT || 4321;

//spin up server
app.listen(port, function(){
  console.log('Our server is up on: ', port);
});
