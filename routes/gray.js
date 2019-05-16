/**
 * http://usejsdoc.org/
 */


//var logic = require('./gray_logic');

var router = 'views/gray/';

exports.gray = function(req, res){
	//logic.print();
	res.sendfile( router +  'gray.html');
};

exports.gray_1 = function(req, res){
	res.sendfile( router +  'gray_1.html');
};

exports.gray_2 = function(req, res){
	console.log("res.grayText : " + res.grayText);
	console.log("req.grayText : " + req.grayText);
	res.sendfile( router +  'gray_2.html');
};

exports.gray_t = function(req, res){
	res.sendfile( router +  'gray_t.html');
};

exports.gray_m = function(req, res){
	res.sendfile( router +  'gray_m.html');
};

exports.gray_b = function(req, res){
	res.sendfile( router +  'gray_b.html');
};

exports.gray_p = function(req, res){
	res.sendfile( router +  'gray_p.html');
};

exports.gray_f = function(req, res){
	res.sendfile( router +  'gray_f.html');
};