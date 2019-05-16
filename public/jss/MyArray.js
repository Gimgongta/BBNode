/**
 * http://usejsdoc.org/
 */

function MyArray(){
	
	arr = [];

	return {
		arr : arr
		, getConsole : function(){ return "1" }
		, push : function( ){ return "2" } 
	}

}

export function sayHello(){  
	  console.log('Hello');
	  return "123"
	}