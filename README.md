# object-normalize

## Install

```sh
$ npm install --save object-normalize
```

## Usage
```js
var normalize = require('object-normalize');

var obj = {
  'name': 'Abelardo',
  'address.street': 'Street .',
  'address.number': 122
}

normalize(obj);
// => {name: 'Abelardo', {address: {street: 'Street .', number: 122 }}}
```

## License

MIT