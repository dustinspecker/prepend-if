'use strict';

/**
 * If string doesn't start with prependString, prepend prependString to string.
 * Else return string
 * @param {String} string - string to prepend, conditionally
 * @param {String} prependString - string to prepend to string if string doesn't start with prependString
 * @return {String} - string starting with prependString
 */
function defaultCondition(string, prependString) {
  return string.indexOf(prependString) !== 0;
}

/**
 * Prepend a string if a condition is met
 * @throws {TypeError} - if string or prependString is not a string
 * @param {String} string - string to prepend text to if condition is true
 * @param {String} prependString - string that should be prepended to string
 * @param {Function} condition - if true, prepend string to string
 * @return {String} - string with prependString if condition is true, otherwise just string
 */
export default function prependIf(string, prependString, condition) {
  if (typeof string !== 'string' || typeof prependString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (condition && typeof condition !== 'function') {
    throw new TypeError('Expected a function');
  }

  if (!condition) {
    condition = defaultCondition;
  }

  if (condition(string, prependString)) {
    return prependString + string;
  }

  return string;
}
