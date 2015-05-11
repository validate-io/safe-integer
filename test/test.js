/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to stub dependencies:
	proxyquire = require( 'proxyquire' ),

	// Module to be tested:
	isSafeInteger = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-safe-integer', function tests() {

	it( 'should export a function', function test() {
		expect( isSafeInteger ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			3,
			3.0,
			Math.pow( 2, 53 ) - 1
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isSafeInteger( values[ i ] ), values[ i ] );
		}
	});

	it( 'should negatively validate', function test() {
		var validate,
			values,
			flg;

		if ( !Number.hasOwnProperty( 'isSafeInteger' ) ) {
			Number.isSafeInteger = isSafeInteger;
			flg = true;
		}
		validate = proxyquire( './../lib', {} );

		values = [
			'5',
			null,
			undefined,
			true,
			NaN,
			Number.POSITIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			Math.pow( 2, 53 ),
			Math.PI,
			new Number( 3 ),
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( validate( values[ i ] ), values[ i ] );
		}
		if ( flg ) {
			delete Number.isSafeInteger;
		}
	});

	it( 'should provide a polyfill', function test() {
		var validate,
			values,
			fcn;

		if ( Number.hasOwnProperty( 'isSafeInteger' ) ) {
			fcn = Number.isSafeInteger;
			delete Number.isSafeInteger;
		}
		validate = proxyquire( './../lib', {} );

		values = [
			'5',
			null,
			undefined,
			true,
			NaN,
			Number.POSITIVE_INFINITY,
			Number.NEGATIVE_INFINITY,
			Math.pow( 2, 53 ),
			Math.PI,
			new Number( 3 ),
			{},
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( validate( values[ i ] ), values[ i ] );
		}
		if ( fcn ) {
			Number.isSafeInteger = fcn;
		}
	});

});
