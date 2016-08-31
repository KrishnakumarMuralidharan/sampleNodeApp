//required modules
var express = require("express");
var app = express();
var http = require("http");

//required files
var myRoutes = require("./routes/myRoutes.js");
var db = require("./config/dbconfig.js");

//routing is done here
app.get('/:tableName', myRoutes.showTable);
app.get('/update/:id/:email/:age/:title', myRoutes.updateTable);
app.get('/add/:id/:user', myRoutes.addData);
app.get('/copyme/:id', myRoutes.copyme);
app.get('/fetch/:id', myRoutes.fetchData);
app.get('/deleteme/:id', myRoutes.deleteme);
app.get('*', myRoutes.showTable);

//server listening in port
 db.open(function(err, mongoclient) {
  if(err) throw err;
    app.listen(3000, function(){
    console.log('Express server listening on port ' ,3000);
   });
 });
