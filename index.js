'use strict';

function normalize (obj, str, value) {
  if (typeof str === 'string') {
    str = str.split('.');
  }

  if (str.length > 1) {
    var prop = str.shift();

    if (!obj.hasOwnProperty(prop)) {
      obj[prop] = {};
    }

    normalize(obj[prop], str, value);
  } else {
    obj[str[0]] = value;
  }
}

module.exports = function (source) {
  var obj = {};
  var keys = Object.keys(source);

  for (var i = 0; i < keys.length; i++) {
    if (keys[i].indexOf('.') === -1) {
      obj[keys[i]] = source[keys[i]];
    } else {
      normalize(obj, keys[i], source[keys[i]]);
    }
  }

  return obj;
};

