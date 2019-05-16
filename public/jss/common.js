/**
 * http://usejsdoc.org/
 */

//텍스트 박스 만들기
var makeBox = function( $id, text, funcName ){
	
	//var _element = window.document.querySelector('#' + $id );
	var _element = window.document.getElementById( $id );
	var textSize = text.length;
	var star = '';
	var returnEle = '';
	
	for( var i = 0 ; i < textSize ; i++ ){
		star += ( i == 0 || i == textSize - 1 ) ? '**' : '*';
	}
	
	returnEle = '<span onclick="javascript:' + funcName +'()">' + star + '<br>' + text + "<br>" + star + '</span>';
	_element.innerHTML = returnEle;
	
}

//파일(input tag file)의 정보 구하기
var getFileInfo = function( $dom /* $id */ ){
	
	var f = $dom; /* var f = window.document.querySelector( "#" + $id ); */
	var files = f.files;
	
	var name, type, opener, realName;

	for ( var i = 0 ; i < files.length ; i++ ) {
	  
	    name = files[ i ].name;
	    type = files[ i ].type;
	    opener = name.split( "." )[ name.split( "." ).length - 1 ]; 
		realName = name.substring( 0, ( name.length - ( opener.length + 1 ) ) );
    
    	console.log( "Filename: " + realName + " , Type: " + type + " , opener : " + opener );
  	}
	
	f = null, files = null, name = null, type = null, opener = null, realName = null;
};

//시간 정보 구하기
var getTimeInformation = function(){
	
	
};

//객체의 모든 정보 구하기
var getObjectInfo = function( obj ){
	
	console.log( JSON.stringify( obj ) );
	
};

// 길이만큼 0으로 채우기
var setZeroUpToLength = function( text, leg ) {
	
	var zero = '';
	text = text.toString();
	var sizeOfText = text.length;
	var zeroLength = leg - sizeOfText
	
	if ( zeroLength > 0 ) {
		
		for ( var i = 0 ; i < zeroLength ; i++ ){
			
			zero += '0';
		}
	}
	
	sizeOfText = null, zeroLength = null;
	return zero + text;
}

var getTimeStamp = function () { // 24시간제
	
	var d = new Date();

	var s =
		setZeroUpToLength(d.getFullYear(), 4) + '-' +
		setZeroUpToLength(d.getMonth() + 1, 2) + '-' +
		setZeroUpToLength(d.getDate(), 2) + ' ' +

		setZeroUpToLength(d.getHours(), 2) + ':' +
		setZeroUpToLength(d.getMinutes(), 2) + ':' +
		setZeroUpToLength(d.getSeconds(), 2);

	return s;
}

var getNavigatorInfo = function() {
	
	console.log(" *NAVIGATOR* navigator.appCodeName : The code name of the browser : " + navigator.appCodeName );	
	console.log(" *NAVIGATOR* navigator.appName : The name of the browser : " + navigator.appName );
	console.log(" *NAVIGATOR* navigator.appVersion : The version information of the browser : " + navigator.appVersion );
	console.log(" *NAVIGATOR* navigator.cookieEnabled : Determines whether cookies are enabled in the browser : " + navigator.cookieEnabled );
	console.log(" *NAVIGATOR* navigator.geolocation : A Geolocation object that can be used to locate the user's position : " + navigator.geolocation );
	console.log(" *NAVIGATOR* navigator.language : The language of the browser : " + navigator.language );
	console.log(" *NAVIGATOR* navigator.onLine : Determines whether the browser is online : " + navigator.onLine );
	console.log(" *NAVIGATOR* navigator.platform : For which platform the browser is compiled : " + navigator.platform );
	console.log(" *NAVIGATOR* navigator.product : The engine name of the browser : " + navigator.product );
	console.log(" *NAVIGATOR* navigator.userAgent : The user-agent header sent by the browser to the server : " + navigator.userAgent );
	console.log( "" );
			
};

var getDocumentInfo = function() {
	
	console.log(" *DOCUMENT* document.anchors : Returns all <a> elements that have a name attribute : " + document.anchors );	
	console.log(" *DOCUMENT* document.applets : Returns all <applet> elements (Deprecated in HTML5) : " + document.applets );	
	console.log(" *DOCUMENT* document.baseURI : Returns the absolute base URI of the document : " + document.baseURI );	
	console.log(" *DOCUMENT* document.body : Returns the <body> element : " + document.body );	
	console.log(" *DOCUMENT* document.cookie : Returns the document's cookie : " + document.cookie );	
	console.log(" *DOCUMENT* document.doctype : Returns the document's doctype : " + document.doctype );	
	console.log(" *DOCUMENT* document.documentElement : Returns the <html> element : " + document.documentElement );	
	console.log(" *DOCUMENT* document.documentMode: Returns the URI of the document : " + document.documentMode );	
	console.log(" *DOCUMENT* document.documentURI: Returns the URI of the document : " + document.documentURI );	
	console.log(" *DOCUMENT* document.domain: Returns the domain name of the document server : " + document.domain );	
	console.log(" *DOCUMENT* document.domConfig: Returns the DOM configuration : " + document.domConfig );	
	console.log(" *DOCUMENT* document.embeds : Returns all <embed> elements : " + document.embeds );	
	console.log(" *DOCUMENT* document.forms : Returns all <form> elements : " + document.forms );	
	console.log(" *DOCUMENT* document.head : Returns the <head> element : " + document.head );	
	console.log(" *DOCUMENT* document.images : Returns all <img> elements : " + document.images );	
	console.log(" *DOCUMENT* document.implementation : Returns the DOM implementation : " + document.implementation );	
	console.log(" *DOCUMENT* document.inputEncoding : Returns the document's encoding (character set) : " + document.inputEncoding );	
	console.log(" *DOCUMENT* document.lastModified : Returns the date and time the document was updated : " + document.lastModified );	
	console.log(" *DOCUMENT* document.links : Returns all <area> and <a> elements that have a href attribute : " + document.links );	
	console.log(" *DOCUMENT* document.readyState : Returns the (loading) status of the document : " + document.readyState );	
	console.log(" *DOCUMENT* document.referrer : Returns the URI of the referrer (the linking document) : " + document.referrer );	
	console.log(" *DOCUMENT* document.scripts : Returns all <script> elements : " + document.scripts );	
	console.log(" *DOCUMENT* document.strictErrorChecking : Returns if error checking is enforced : " + document.strictErrorChecking );	
	console.log(" *DOCUMENT* document.title : Returns the <title> element : " + document.title );	
	console.log(" *DOCUMENT* document.URL : Returns the complete URL of the document : " + document.URL );	
	console.log( "" );

}


var objToQuery  = function( obj ) {
    var parts = [];
    for ( var key in obj ) {
        if ( obj.hasOwnProperty( key ) ) {
            parts.push( encodeURIComponent( key ) + '=' + encodeURIComponent( obj[ key ] ) );
        }
    }
    return '?' + parts.join( '&' );
}

var getDOMInfo = function( $id ){
	
	var $dom = document.getElementById( $id );
	
	
	
	console.log( " *DOM* DOM.innerHTML : the inner text value of DOM (a HTML element) : " + $dom.innerHTML );
	console.log( " *DOM* DOM.nodeName : the name of DOM : " + $dom.nodeName );
	console.log( " *DOM* DOM.nodeValue : the value of DOM : " + $dom.nodeValue );
	console.log( " *DOM* DOM.parentNode : the parent node of DOM : " + $dom.parentNode );
	console.log( " *DOM* DOM.childNodes : the child nodes of DOM : " + $dom.childNodes );
	console.log( " *DOM* DOM.attributes : the attributes nodes of DOM : " + $dom.attributes );
	console.log( "" );
	
}

//url, params, location
var loadDoc = function( method, url, $id, params/*obj*/ ) {
	
	var xhttp = window.XMLHttpRequest 
				? new XMLHttpRequest() 
				: new ActiveXObject("Microsoft.XMLHTTP");
	
	xhttp.open( method, url, true );
	xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
	var parts = [];
    for ( var key in params ) {
        if ( params.hasOwnProperty( key ) ) {
            parts.push( encodeURIComponent( key ) + '=' + encodeURIComponent( params[ key ] ) );
        }
    }

	xhttp.send( parts.join('&') );
  	xhttp.onreadystatechange = content;
	  
    function content(){
    	
    	if ( xhttp.readyState == XMLHttpRequest.DONE && xhttp.status == 200 ) {
        	
    		document.getElementById( $id ).innerHTML = xhttp.responseText;
    		console.log("this.responsText : " + xhttp.responseText );
          
        }
    	else {
    		
    	
    		
    	}	
    } 
}

var makeSignal = function( numberArr, context ) {
	
	//Browser support
	 //window.AudioContext = window.AudioContext || window.webkitAudioContext;

	 // Initialize audio context
	 //var context = new AudioContext(); 

	 //var frequencies = [261.63, 329.63, 392];
	 
	 var frequencies = numberArr;

	 for (var i in frequencies) {
	     // Create oscillator and set up attributes
	     var oscillator = context.createOscillator();
	     oscillator.frequency.value = frequencies[i];
	     //oscillator.type = "square"; 

	     
	     
	     // Attach to destination
	     oscillator.connect(context.destination); 

	     // Play oscillator
	     oscillator.start(0);
	 }
	
}