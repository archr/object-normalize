var assert = require('assert');
var normalize = require('./');

it('should work', function () {
  var obj = {
    'name': 'Abelardo',
    'address.street': 'Street .',
    'address.number': 122
  }

  var transform = {
    name: 'Abelardo',
    address: {
      street: 'Street .',
      number: 122
    }
  };

  assert.deepEqual(normalize(obj), transform);
})
