# prepend-if
[![NPM version](https://badge.fury.io/js/prepend-if.svg)](https://badge.fury.io/js/prepend-if) [![Build Status](https://travis-ci.org/dustinspecker/prepend-if.svg)](https://travis-ci.org/dustinspecker/prepend-if) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/prepend-if.svg)](https://coveralls.io/r/dustinspecker/prepend-if?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/prepend-if/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/prepend-if) [![Dependencies](https://david-dm.org/dustinspecker/prepend-if.svg)](https://david-dm.org/dustinspecker/prepend-if/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/prepend-if/dev-status.svg)](https://david-dm.org/dustinspecker/prepend-if/#info=devDependencies&view=table)

> Prepend a string, conditionally

## Install
```
npm install --save prepend-if
```

## Usage
### ES2015
```javascript
import prependIf from 'prepend-if';

prependIf('world', 'hello ');
// => 'hello world'

prependIf('hello', 'he');
// => 'hello'

prependIf('world', 'hello ', true);
// => 'hello world'

prependIf('world', 'hello ', false);
// => 'world'

function customCondition(string, prependString) {
  return string.length > prependString.length;
}

prependIf('longer', 'short', customCondition);
// => 'shortlonger'

prependIf('short', 'longer', customCondition);
// => 'short'
```

### ES5
```javascript
var prependIf = require('prepend-if');

prependIf('world', 'hello ');
// => 'hello world'

prependIf('hello', 'he');
// => 'hello'

prependIf('world', 'hello ', true);
// => 'hello world'

prependIf('world', 'hello ', false);
// => 'world'

function customCondition(string, prependString) {
  return string.length > prependString.length;
}

prependIf('longer', 'short', customCondition);
// => 'shortlonger'

prependIf('short', 'longer', customCondition);
// => 'short'
```

## API

### prependIf(string, prependString[, condition])

#### string

Type: `string`

String to prepend if condition is true.

#### prependString

Type: `string`

String to prepend to string if condition is true.

#### condition

Type: `function` || `boolean`

Function to evaluate to determine if string should be prepended with prependString. condition is given string and prependString as parameters. `Default` condition checks if string starts with prependString. If not, prependString is prepended to string.

Condition may also be a `boolean`. If `true`, string is prepended with prependString, otherwise it is not.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)