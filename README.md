# schemajs

A JavaScript schema conformer

## Installation

```sh
npm i jasonmerino/schemajs -S
```

## Usage

Require the module

```js
var schemajs = require('schemajs')
```

Define a schema

```js
var schema = {
  name: String,
  favoriteNumber: Number,
  age: String,
}
```

Conform data to schema

```js
var conformedData = schemajs(schema, {
  name: 'Jason Merino',
  favoriteNumber: '7',
  age: 99,
})

// the call to schemajs above returns an object with this shape:
//
// {
//   name: 'Jason Merino',
//   favoriteNumber: 7,
//   age: '99',
// }
```

## API Reference

```js
schemajs(schema:Object, objectToConform:Object[, conformFunctionType:String ('default' | 'dynamodb')])
```
* **schema** - The object defining the schema
* **objectToConform** - The object to conform to the schema
* **conformFunctionType** - A string defining the type of data that is returned (optional)

## License

MIT
