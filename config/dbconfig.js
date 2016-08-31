var server = require('mongodb').Server,
    Db = require('mongodb').Db,
    //to connect to DB
    db = new Db('tryout', new server('127.0.0.1',27017));

module.exports = db;
