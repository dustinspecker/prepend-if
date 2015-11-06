'use strict';
import mutliTypeof from 'multi-typeof';

/**
 * Determine if string should be prepended with prependString
 * @param {String} string - string to prepend, conditionally
 * @param {String} prependString - string to prepend to string if string doesn't start with prependString
 * @return {Boolean} - should string be prepended with prependString?
 */
function defaultCondition(string, prependString) {
  return string.indexOf(prependString) !== 0;
}

/**
 * Prepend a string if a condition is met
 * @throws {TypeError} - if string or prependString is not a string
 * @param {String} string - string to prepend text to if condition is true
 * @param {String} prependString - string that should be prepended to string
 * @param {Function} [condition=defaultCondition] - if true, prepend string to string
 * @return {String} - string with prependString if condition is true, otherwise just string
 */
module.exports = function (string, prependString, condition = defaultCondition) {
  if (typeof string !== 'string' || typeof prependString !== 'string') {
    throw new TypeError('Expected a string');
  }

  if (condition && !mutliTypeof(condition, ['boolean', 'function'])) {
    throw new TypeError('Expected a boolean or function');
  }

  if (typeof condition === 'boolean') {
    return condition ? prependString + string : string;
  }

  return condition(string, prependString) ? prependString + string : string;
};
