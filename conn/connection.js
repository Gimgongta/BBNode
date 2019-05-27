/**
 * http://usejsdoc.org/
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '!Qazxsw2#Edc',
	  database : 'mydb'
	});

module.exports = connection;