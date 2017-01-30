const assert = require('assert');
const methods = require('../src/functions');

describe('test string methods - f', () => {
  it('tests encoding "acp"', (done) => {
	  
    assert(methods.f('acp') === 'zxk');
    done();
  });
  it('tests encoding "Errors in strategy cannot be correct through tactical maneuvers"', (done) => {
	  
    assert(methods.f('Errors in strategy cannot be correct through tactical maneuvers') ===
                     'Viilih rm hgizgvtb xzmmlg yv xliivxg gsilfts gzxgrxzo nzmvfevih');
    done();
  });
  it('tests encoding "Reverse the encoding Spock"', (done) => {
	  
    assert(methods.f(methods.f('Reverse the encoding Spock')) ===
                     'Reverse the encoding Spock');
    done();
  });
});
