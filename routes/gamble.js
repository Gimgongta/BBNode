

var puzzleData = "";

var lastMerge = [];
var impossiblePattenArr = [];
var totalCount = 0;

var ABC = [ 'a', 'b', 'c', 'd', 'x' ];
thisABC = [];

//make...
//abc - 10,1,20,2,30,3,0,11,12
var _10 = [ 'axx', 'xbx', 'xxc' ];
var _01 = [ 'xax', 'xxa', 'bxx', 'xxb', 'cxx', 'xcx' ];
var _20 = [ 'abx', 'axc', 'xbc' ];
var _02 = [ 'bax', 'bxa', 'xab', 'cax', 'cxa', 'xca', 'bcx', 'cxb', 'xcb' ];
var _30 = [ 'abc' ];
var _03 = [ 'bca', 'cab' ];
var _00 = [ 'xxx' ];
var _11 = [ 'axb', 'acx', 'xba', 'cbx', 'xac', 'bxc' ];
var _12 = [ 'acb', 'cba', 'bac' ];

//abc - not( number )
var __1 = [ 'axx', 'xax', 'xxa', 'bxx', 'xbx', 'xxb', 'cxx', 'xcx', 'xxc' ];
var __2 = [ 'abx', 'axb', 'xab', 'bax', 'bxa', 'xba', 'bcx', 'bxc', 'xbc', 'cbx', 'cxb', 'xcb', 'acx', 'axc', 'xac', 'cax', 'cxa', 'xca' ];
var __3 = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba'];

//abc - not
var _10_ = [ 'xax', 'xxa', 'bxx', 'xxb', 'cxx', 'xcx' ].concat( __2 ).concat( __3 );
var _01_ = [ 'axx', 'xbx', 'xxc' ].concat( __2 ).concat( __3 );
var _20_ = [ 'axb', 'acx', 'cbx', 'xba', 'bxc', 'xac', 'xax', 'xxa', 'bxx', 'xxb', 'cxx', 'xcx' ].concat( __3 );
var _02_ = [ 'abx', 'axc', 'xbc', 'axx', 'xbx', 'xxc' ].concat( __3 );
var _30_ = [ 'acb', 'bac', 'bca', 'cab', 'cba' ];
var _03_ = [ 'axx', 'xbx', 'xxc' ];
var _00_ = __1.concat( __2 ).concat( __3 );
var _11_ = [ 'abx', 'axc', 'xbc' ].concat( __3 );
var _12_ = [ 'abc' ];

//mapping
var possibleArr = [ _00, _01, _02, _03, 0, 0, 0, 0, 0, 0, 
					_10, _11, _12, 0, 0, 0, 0, 0, 0, 0, 
					_20, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					_30 ];
					
var imPossibleArr = [ _00_, _01_, _02_, _03_, 0, 0, 0, 0, 0, 0, 
						_10_, _11_, _12_, 0, 0, 0, 0, 0, 0, 0, 
						_20_, 0, 0, 0, 0, 0, 0, 0, 0, 0,
						_30_ ];

var resultArr = [];




function getData( size ) {

	var answer = getSizeNumber( size );
	var flag;

	do {

		flag = start(answer);

	} while (!flag);

	console.log("exit");
	return puzzleData;
}

function start( answer ){
	

	var answerArr = answer.split('');
	var size = answerArr.length;
	
	for( var i = 0 ; i < size ; i++ ){
		thisABC.push( ABC[ i ] );
	}
	
	lastMerge = [ 'xxx' ];
	impossiblePattenArr = [];
	totalCount = 0;
	
	
	var count = 0;
 	var endFlag = false;
 	var before = [];
 	var lastMergeTemp = [];
 	
 	puzzleData = "$" + answer;
 	resultArr = [];
 	
	while( true ){
		

		
		var now = getNumber( size );
		var numArr = now.split('');
		var r = getResult( numArr, answerArr, size );
		
		if( r == 30 ){
			break;
		}
		
		resultArr.push( r )
		
		puzzleData += now;
		puzzleData += ( r < 10 ) ? "0" + r : "" + r ;
	
		
		lastMerge = realMerge( lastMerge, updatePatten( numArr, possibleArr[ r ] ) );
		impossiblePattenArr = impossiblePattenArr.concat( updatePatten( numArr, imPossibleArr[ r ] ) );
		impossiblePattenArr = impossiblePattenArr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
		
		
		lastMerge = fillteringMerge( lastMerge, impossiblePattenArr );

		
		before.push( now );
	
	}
	
	
	if( lastMerge.length == 1 ){
		
		
		if( isAllNumber( lastMerge[0] ) 
				&& resultArr[ resultArr.length - 1 ] != 12
				&& resultArr[ resultArr.length - 1 ] != 3 ) {
			
			return true;
		}
	}
	
	
	return false;
	
}

//****
function getSizeNumber( size ){
	
	var num = [];
	var dupflag = false;
	var numberArr = [];
	var sizeOfNumberArr = 0;
	
	do{
		
		dupflag = false;
		numberArr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		sizeOfNumberArr = numberArr.length;
		
		for( var i = 0 ; i < size ; i++ ){
			
			num[ i ] = numberArr[ Math.floor( Math.random() * sizeOfNumberArr ) ];
			if( num[ i ] == 'x' ){
				dupflag = true;
				break;
			}
			numberArr[ num[ i ] ] = 'x';
		}
		
	}while( dupflag );
	
	return num.join('');	
}


function getNumber( size ){	
	
	var stack = 0;
	
	do{
		
		var pattenFlag = false;
		var pattenFlag2 = true;
		var threeNumber = getSizeNumber( size ); 
			
		var pattenSize = impossiblePattenArr.length;
		for( var i = 0 ; i < pattenSize ; i++ ){
			
			pattenFlag =  isCorrectInPatten( threeNumber, impossiblePattenArr[i] );
			if( pattenFlag ) { break; }
					
		}
		
		pattenSize = lastMerge.length;
		for( var i = 0 ; i < pattenSize ; i++ ){
			
			pattenFlag2 = isCorrectInPatten( threeNumber, lastMerge[i] );
			if( pattenFlag2 ) { break; }
					
		}
			
	}while(  pattenFlag || !pattenFlag2  );
	
	return threeNumber;
	
}

//****
function getResult( numArr, answerArr, size ){
	
	var result = 0;
	
	for( var i = 0 ; i < size ; i++ ){
		for( var j = 0 ; j < size ; j++ ){
			if( answerArr[ i ] == numArr[ j ] ){
				result = i == j ? result + 10 : result + 1;
				break;
			}
		}	
	}
	
	return result;
}


function getRealPatten( textArr, patten, size ){
	
	var result = '';

	for( var j = 0 ; j < size ; j++ ){
		
		var patten_j = patten[ j ];
		
		for( var k = 0 ; k < size ; k++ ){ 
			
			if( patten_j == thisABC[ k ] ){ result += textArr[ k ]; } 
		}
		if( result.length != j + 1 ){ result += 'x'; }
		

	}
	
	return result;
	
	
}

function updatePatten( textArr, pattenArr ){
	
	var resultArr = [];
	var tempText = '';
	var size = textArr.length;
	
	var sizeOfpattenArr = pattenArr.length;
	
	for( var i = 0 ; i < sizeOfpattenArr ; i++ ){
		
		tempText = getRealPatten( textArr, pattenArr[ i ], size );
		resultArr.push( tempText );
	}
	
	return resultArr 

}


function merge( x, y, size ){
	
	var result = '';
	
	var arr_x = x.split('');
	var arr_y = y.split('');
	
	for( var i = 0 ; i < size ; i++ ){
		
		var unit_x = arr_x[ i ];	
		var unit_y = arr_y[ i ];
		
		
		//result = result + ( unit_x == 'x' ? unit_y : unit_x );
		if( unit_x == unit_y ){
			
			result += unit_x;
		}
		else if( unit_x == 'x' && unit_y != 'x' ){
			
			result += unit_y;
		}
		else if( unit_x != 'x' && unit_y == 'x' ){
			
			result += unit_x;
		}
		else{
			return '';
		}
		
	}

	
	var result_arr = result.split('');
	
	//중복문자가있으면
	for( var i = 0 ; i < size ; i++ ){
		
		for( var j = 0 ; j < size ; j++ ){

			if( i != j && result_arr[ i ] == result_arr[ j ] && result_arr[ i ] != 'x' && result_arr[ j ] != 'x' ){
				
				return '';
			}
		}
	}
	
	return result;

}



function realMerge( mergeArr_last, patten_Now ){
	
	var resultArr = [];
	var result = '';
	
	var sizeOfMergeArr = mergeArr_last.length;
	var sizeOfPatten = patten_Now.length;
	
	for( var i = 0 ; i < sizeOfMergeArr ; i++ ){
		
		var arr_i = mergeArr_last[ i ];
		
		for( var j = 0 ; j < sizeOfPatten ; j++ ){
			
			var arr_j = patten_Now[ j ];
			
			result = merge( arr_i, arr_j, 3 );
			
			if( result != '' ){ resultArr.push( result ); }
			
		}
	}
		
	return resultArr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
		
}

function fillteringMerge( lastMerge, impossiblePattenArr ){
	
	var fillteredResultArr = [];
	
	for( var i = 0 ; i < lastMerge.length ; i++ ){
		
		var lastMerge_i = lastMerge[ i ];
		
		for( var j = 0 ; j < impossiblePattenArr.length ; j++ ){
			
			if( !isCorrectInPatten( lastMerge_i, impossiblePattenArr[ j ] ) ){
				
				fillteredResultArr.push( lastMerge_i );
				break;
				
			}
			
		}
	}
	
	return fillteredResultArr;
	
}


function isCorrectInPatten( textNum, patten ){
	
	var count = 0;
	var numArr = textNum.split('');
	var size = numArr.length;
	
	for( var i = 0 ; i < size ; i++ ){	
		if( patten[ i ] == 'x' || ( patten[ i ] != 'x' && textNum[ i ] == patten[ i ] ) ){
			count++;
		}	
	}
	
	return count == size ? true : false;
}

function isAllNumber( str ){
	
	var arr = str.split('');
	
	for( var i = 0 ; i < 3 ; i++ ) {
		
		if( arr[i] == "x" ) {
			return false;
		}
	}
	
	return true;
}





module.exports = { 
		getData,
		getSizeNumber 
		};















