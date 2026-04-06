# LocusJS

A lightweight JavaScript utility library providing helpful extension methods for native types like arrays, strings, and objects.

[![npm version](https://img.shields.io/npm/v/@ayanavo/locusjs)](https://www.npmjs.com/package/@ayanavo/locusjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @ayanavo/locusjs
```

## Usage

Simply import the library in your project:

```javascript
import '@ayanavo/locusjs';
```

Once imported, all extension methods are available on their respective native types.

---

## Array Methods

### Numeric Operations

#### `max()`
Returns the highest numeric value from the array.

```javascript
[1, 5, 3, 2].max(); // 5
```

#### `min()`
Returns the lowest numeric value from the array.

```javascript
[1, 5, 3, 2].min(); // 1
```

#### `sum(predicate?)`
Returns the sum of all numbers in the array.

```javascript
[1, 2, 3, 4].sum(); // 10
[1, 2, 3, 4].sum(x => x * 2); // 20
```

#### `avj(predicate?)`
Returns the average of all numbers in the array.

```javascript
[2, 4, 6, 8].avj(); // 5
[2, 4, 6, 8].avj(x => x / 2); // 2.5
```

### Filtering & Selection

#### `unique()`
Returns a new array with only unique elements.

```javascript
[1, 2, 2, 3, 3, 3].unique(); // [1, 2, 3]
```

#### `equal(array)`
Determines whether all members of the array are equal to another array.

```javascript
[1, 2, 3].equal([1, 2, 3]); // true
[1, 2, 3].equal([1, 2, 4]); // false
```

#### `exclusive(array)`
Determines whether all members of the array are NOT present in another array.

```javascript
[1, 2, 3].exclusive([4, 5, 6]); // true
[1, 2, 3].exclusive([3, 4, 5]); // false
```

#### `inbetween(start, end?)`
Returns a new array with elements between two values (exclusive of start, inclusive of end).

```javascript
[1, 2, 3, 4, 5].inbetween(2, 4); // [3, 4]
```

#### `intersection(array)`
Returns elements that exist in both arrays.

```javascript
[1, 2, 3, 4].intersection([2, 3, 5]); // [2, 3]
```

#### `compact()`
Removes all falsy values from the array.

```javascript
[1, 0, null, undefined, 'text', ''].compact(); // [1, 'text']
```

### Array Organization

#### `empty()`
Determines whether the array is empty.

```javascript
[].empty(); // true
[1, 2, 3].empty(); // false
```

#### `groupby(predicate)`
Groups array elements by the result of a predicate function.

```javascript
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

users.groupby(u => u.role);
// { admin: [{...}, {...}], user: [{...}] }
```

#### `chunk(size)`
Splits the array into chunks of specified size.

```javascript
[1, 2, 3, 4, 5].chunk(2); // [[1, 2], [3, 4], [5]]
```

#### `zip(...arrays)`
Combines elements from multiple arrays into pairs.

```javascript
[1, 2, 3].zip(['a', 'b', 'c']); // [[1, 'a'], [2, 'b'], [3, 'c']]
```

#### `orderBy(iteratees, orders?)`
Sorts array elements by one or more properties or callback functions.

```javascript
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 28 }
];

// Sort by name ascending, then age descending
users.orderBy(['name', 'age'], ['asc', 'desc']);
// [{name: 'Alice', age: 30}, {name: 'Alice', age: 28}, {name: 'Bob', age: 25}]

// Sort using callback function
users.orderBy([u => u.age], ['asc']);
// [{name: 'Bob', age: 25}, {name: 'Alice', age: 28}, {name: 'Alice', age: 30}]
```

#### `union(array)`
Combines elements from two arrays (union operation).

```javascript
[1, 2, 3].union([3, 4, 5]); // [1, 2, 3]
```

---

## String Methods

#### `toCamelCase()`
Converts string to camelCase.

```javascript
'hello-world-javascript'.toCamelCase(); // 'helloWorldJavascript'
'hello_world_javascript'.toCamelCase(); // 'helloWorldJavascript'
```

#### `toSnakeCase()`
Converts string to snake_case.

```javascript
'helloWorldJavascript'.toSnakeCase(); // 'hello_world_javascript'
'hello-world-javascript'.toSnakeCase(); // 'hello_world_javascript'
```

#### `toPascalCase()`
Converts string to PascalCase.

```javascript
'hello-world-javascript'.toPascalCase(); // 'HelloWorldJavascript'
'hello_world_javascript'.toPascalCase(); // 'HelloWorldJavascript'
```

#### `toKebabCase()`
Converts string to kebab-case.

```javascript
'helloWorldJavascript'.toKebabCase(); // 'hello-world-javascript'
'hello_world_javascript'.toKebabCase(); // 'hello-world-javascript'
```

#### `toTitleCase()`
Converts string to Title Case.

```javascript
'hello world javascript'.toTitleCase(); // 'Hello World Javascript'
'hello-world-javascript'.toTitleCase(); // 'Hello World Javascript'
```

---

## Miscellaneous Methods

#### `randomBy()`
Generates a random string.

```javascript
'abc123!@#'.randomBy(); // Random string from characters in the input
```

---

## Features

- ✨ Lightweight and modular
- 🎯 Easy-to-use API
- 📦 Built with Rollup
- 🔧 TypeScript support with type definitions
- 📝 Comprehensive documentation
- 🧪 MIT licensed

## Building

To build the library:

```bash
npm run build
```

This uses Rollup to create optimized bundles.

## Development

Format code:
```bash
npm run prettify
```

Run tests:
```bash
npm run test
```

## Repository

- GitHub: [Ayanavo/Library](https://github.com/Ayanavo/Library)
- npm: [@ayanavo/locusjs](https://www.npmjs.com/package/@ayanavo/locusjs)

## License

MIT © [Ayanavo](https://github.com/Ayanavo)