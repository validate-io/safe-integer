'use strict';

var isSafeInteger = require( './../lib' );

console.log( isSafeInteger( 3 ) );
// returns true

console.log( isSafeInteger( 3.0 ) );
// returns true

console.log( isSafeInteger( Math.pow( 2, 53 ) - 1 ) );
// returns true

console.log( isSafeInteger( 3.1 ) );
// returns false

console.log( isSafeInteger( Math.pow( 2, 53 ) ) );
// returns false

console.log( isSafeInteger( NaN ) );
// returns false

console.log( isSafeInteger( Number.POSITIVE_INFINITY ) );
// returns false

console.log( isSafeInteger( '3' ) );
// returns false
