const assert = require('assert');
const methods = require('../src/functions');

describe('test string methods - g', () => {
  it('tests character counting "ABCXYZ"', (done) => {
	  
	var x = methods.g('ABCXYZ');
    assert(x.a === 1 && x.b === 1 && x.c === 1 && x.x === 1 && x.y === 1 && x.z === 1);
	done();
  });
  it('tests character counting "Hello there! Apple!"', (done) => {
	  
	var x = methods.g('Hello there! Apple!');
    assert(x.a === 1 && x.e === 4 && x.h === 2 && x.l === 3 && x.o === 1 && x.p === 2 && x.r === 1 && x.t === 1);
	done();
  });
});

