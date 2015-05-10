'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer' );


// CONSTANTS //

var MAX = require( 'compute-const-max-safe-integer' ),
	MIN = require( 'compute-const-min-safe-integer' );


// IS SAFE INTEGER //

/**
* FUNCTION: isSafeInteger( value )
*	Validates if a value is a safe integer.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a safe integer
*/
function isSafeInteger( value ) {
	return isInteger( value ) && MAX >= value && value >= MIN;
} // end FUNCTION isSafeInteger()


// EXPORTS //

module.exports = Number.isSafeInteger || isSafeInteger;
