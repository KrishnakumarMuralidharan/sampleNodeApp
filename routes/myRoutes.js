var myRoutes = {};
var db = require("../config/dbconfig.js");

//to delete a selected row
myRoutes.deleteme = function(req, res){
  db.collection('basicInfo', function(err, tb1){
    tb1.remove({'id': req.params.id}, function(err, res1){
      if(!err){
        db.collection('profInfo', function(err, tb2){
           tb2.remove({'id': req.params.id}, function(err, res2){
             if(!err){
               db.collection('otherInfo', function(err, tb3){
                 tb3.remove({'id': req.params.id}, function(err, res3){
                   if(!err){
                     res.send('All tables flushed using given ID' + res);
                   }
                   else{
                     res.send('ID not found in otherInfo table '+ err);
                   }
                 })
               })
             }
             else{
                  res.send('ID not found in profInfo table '+ err);
             }           
           })
        })
      }
      else{
        res.send('ID not found in basicInfo table '+ err);
      }
    })
  })
};

//to search and to add entry in profInfo table
myRoutes.copyme = function(req, res){
   db.collection('basicInfo', function(err, table){
      table.findOne({'id': req.params.id}, function(err, contents){
        if(contents !== null){
           db.collection('profInfo', function(err, created){
          created.insert({'id': req.params.id, 'name': contents.name, 'Org': 'GMX'}, function(err, result){
            if(result !== null && !err){
                   res.send(result);
            }
            else{
                   res.send('Error: ' +err.errmsg);
            }
          })
        })
        }
        else{
          res.send('ID not found in table1');
        }
      })
   })
};

//to add new values into basicInfo table
myRoutes.addData = function(req, res){
  db.collection('basicInfo', function(err, collection){
  collection.insert({'id': req.params.id, 'name': req.params.user}, function(error, result){
  if(result !== null && result !== ''){
    res.send(result);
  }
  else{
    res.send('Insert error!' + error);
  }
})
})
};

//to update a table column
myRoutes.updateTable = function(req, res){
 db.collection('otherInfo', function(err, table){
  table.findOne({'id': req.params.id}, function(err, value1){
   if(value1 !== null && !err){
    table.update({'id': req.params.id},{$set:{'email': req.params.email, 'age': req.params.age, 'title': req.params.title}}, function(err, done){
              if(done !== null && !err){
                 res.send('Updated sucessfully');
               }
            });
   }
   else{
     table.insert({'id': req.params.id, 'email': req.params.email, 'age': req.params.age, 'title': req.params.title}, function(err, inserted){
            if(inserted !== null && !err){
              res.send(inserted);
            }
            else{
             res.send("Error: "+ err.errmsg);
            }
         })
        }    
  })
 })
};

//to fetch all details based on ID
myRoutes.fetchData = function(req, res){
   var JsonResponse = {};
   db.collection('basicInfo', function(err, tb1){
      tb1.findOne({'id': req.params.id}, function(err, value1){
         if(value1 !== null && !err){
           JsonResponse.id = value1.id;
          JsonResponse.name = value1.name;
           db.collection('profInfo', function(err, tb2){
             tb2.findOne({'name': value1.name}, function(err, value2){
               if(value2 !== null && !err){
                   JsonResponse.orgName = value2.Org;
                   db.collection('otherInfo', function(err, tb3){
                     tb3.findOne({'id': value2.id}, function(err, value3){
                       if(value3 !== null && !err){
                           JsonResponse.email = value3.email;
                           JsonResponse.age = value3.age;
                           JsonResponse.title = value3.title;  
                           res.send(JsonResponse);
                       }
                       else{
                         res.send('ID not found in otherInfo table');
                       }
                     })
                   })
               }
               else{
                 res.send('Name not found in profInfo table');
               }
             })
           })
         }
         else{
           res.send('ID not found in basicInfo table');
         }
      })
   })
};

//starting page in app
myRoutes.showTable = function(req, res){
  var output = {};
  if(req.params.tableName){
    output.tableName = tableName = req.params.tableName;
  }
  else{
   output.tableName = tableName = 'basicInfo';
  }
  db.collection(tableName).find().sort({'id': 1}).toArray(function(err, result) {
    if(result == [] || result == ''){
      res.send('Sorry table not found in database');
    }
    else{
     output.contents = result;
     res.send(output);
    }
  });
};

module.exports = myRoutes;
