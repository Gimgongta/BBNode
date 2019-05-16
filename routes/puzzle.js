/**
 * http://usejsdoc.org/
 */


//import { sayHello } from "../public/jss/MyArray";

//var my = require('../public/jss/MyArray.js');
/*var myApp = my();
*/

var { a, b, c } = require('./mmm');
var { getData, getSizeNumber } = require('./gamble');

exports.data = function( req, res ){
	
	var result = getData( 3 ) 
	var p = result
	res.send(  p );
	
}



