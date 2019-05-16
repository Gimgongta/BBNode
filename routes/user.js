
/*
 * GET users listing.
 */

exports.list = function(req, res){
	
	console.log("res.apa : " + req.param('apa'));
	console.log("req : " + req.headers.host);
	console.log("req.app : " + req.app);
	console.log("req.baseUrl : " + req.baseUrl);
	console.log("req.body : " + JSON.stringify( req.body ) );
	console.log("req.cookies : " + req.cookies);
	console.log("req.fresh : " + req.fresh);
	console.log("req.hostname : " + req.hostname);
	console.log("req.ip : " + req.ip);
	console.log("req.ips : " + req.ips);
	console.log("req.originalUrl : " + req.originalUrl);
	console.log("req.params : " + req.params);
	console.log("req.path : " + req.path);
	console.log("req.protocol : " + req.protocol);
	console.log("req.query : " + JSON.stringify( req.query ) );
	console.log("req.route : " + JSON.stringify( req.route ) );
	console.log("req.secure : " + req.secure);
	console.log("req.signedCookies : " + req.signedCookies);
	console.log("req.stale : " + req.stale);
	console.log("req.subdomains : " + req.subdomains);
	console.log("req.xhr : " + req.xhr);

	
	res.send( a () );

};


function a () {
	
	return "you are a mediaDoll";
}

