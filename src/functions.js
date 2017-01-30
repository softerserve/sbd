"use strict";

var exports = module.exports = {};

exports.f = function(inStr) {

	var schar, cleanStr, cap, i;
	schar = cleanStr = cap = i = undefined;
	var tempArr, newArr;
	tempArr = newArr = [];
	var rosetta = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var ucase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var blank = ' ';
	// clean up input string 
	cleanStr = inStr.replace(/[^a-zA-Z\s]/g,'');
	tempArr = cleanStr.split('');
		
	for (i=0; i<tempArr.length; i++) {
		schar = tempArr[i];
		cap = (ucase.indexOf(schar) == -1) ? 79 : 27;
		// handle case of a blank
		cap = (blank.indexOf(schar) == 0) ? 0 : cap;
		newArr.push(rosetta.charAt(cap - rosetta.indexOf(schar)));
	}
	
	// return encoded string
	return newArr.join('');

}

exports.g = function(inStr) {

	var i, cleanStr;
	i = cleanStr = undefined;
	var retobj = {};
	var tempArr, inputArr;
	tempArr = inputArr = [];
	var base = 'abcdefghijklmnopqrstuvwxyz';
	// clean up input string
	cleanStr = inStr.replace(/[^a-zA-Z]/g,'').toLowerCase();
	// split out input string
	inputArr = cleanStr.split('');
	// initialize return object
	tempArr = base.split('');
	for (i=0; i<tempArr.length; i++) {
		retobj[tempArr[i]] = 0;
	} 
	// process input array
	for (i=0; i<inputArr.length; i++) {
		retobj[inputArr[i]]++;
	}
	//console.log('object returned', retobj);
	return retobj;
	
}
