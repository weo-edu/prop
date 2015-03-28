var assert = require('assert');
var prop = require('..');

describe('prop', function() {
  it('should work', function() {
    var obj = {a: 1, b: {c: 2}};

    assert.equal(prop('a')(obj), 1);
    assert.equal(prop('a.b')(obj), undefined);
    assert.equal(prop('b.c')(obj), 2);
  });

  it('should return the object itself if empty string is passed', function() {
    var obj = {};

    assert.equal(prop('')(obj), obj);
  });

  it('should set properties', function() {
    var obj = {a: 1, b: {c: 2}};

    assert.equal(obj.a, 1);
    prop('a').set(obj, 2);
    assert.equal(obj.a, 2);

    prop('b').set(obj, {d: 3});
    assert.equal(obj.b.d, 3);
    prop('b.c').set(obj, 4);
    assert.equal(obj.b.c, 4);
  });
});