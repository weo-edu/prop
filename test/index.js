var expect = require('chai').expect;
var prop = require('../');

describe('prop', function() {
  it('should work', function() {
    var obj = {a: 1, b: {c: 2}};

    expect(prop('a')(obj)).to.equal(1);
    expect(prop('a.b')(obj)).to.equal(undefined);
    expect(prop('b.c')(obj)).to.equal(2);
  });
});