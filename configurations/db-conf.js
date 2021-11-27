const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gimnasio",
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('En linea...');
    }
  });

  module.exports = mysqlConnection;