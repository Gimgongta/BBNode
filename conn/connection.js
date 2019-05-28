/**
 * http://usejsdoc.org/
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '5ina6ur0',
	  database : 'my_db'
	});

module.exports = connection;