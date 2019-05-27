/**
 * http://usejsdoc.org/
 */


var conn = require('../conn/connection');

var data = 'errer';

exports.data = function( req, res ){
	
	conn.query('SELECT stc from sentence order by rand() limit 1', function(err, rows, fields) {
		
		  if (!err){
			  
			  data = rows[0].stc;
			  console.log('data : ', data);
			  
		  }
			 
		  else {
			  
			  console.log('data : ', err);
		  }
		  
		  
		  res.send( data );
		   
	});
	
}
