/* global describe, it */
'use strict';
import {expect} from 'chai';
import prependIf from '../lib/';

describe('prepend-if', () => {
  it('should throw TypeError if string is not a string', () => {
    function test() {
      prependIf();
    }

    expect(test).to.throw(TypeError, /Expected a string/);
  });

  it('should throw error if prependString is not a string', () => {
    function test() {
      prependIf('hello');
    }

    expect(test).to.throw(TypeError, /Expected a string/);
  });

  it('should throw TypeError if customCondition is passed but not a function or boolean', () => {
    function test() {
      prependIf('hello', 'hi', []);
    }

    expect(test).to.throw(TypeError, /Expected a boolean or function/);
  });

  describe('default condition function', () => {
    it('should not prepend if condition is false', () => {
      expect(prependIf('hello', 'he')).to.eql('hello');
    });

    it('should prepend if condition is true', () => {
      expect(prependIf('world', 'hello ')).to.eql('hello world');
    });
  });

  describe('custom condition function', () => {
    function customCondition(string, prependString) {
      return string.length > prependString.length;
    }

    it('should prepend if customCondition returns true', () => {
      expect(prependIf('longer', 'short', customCondition)).to.eql('shortlonger');
    });

    it('should prepend if customCondition returns false', () => {
      expect(prependIf('short', 'longer', customCondition)).to.eql('short');
    });
  });

  describe('custom condition boolean', () => {
    it('should prepend if customCondition is true', () => {
      expect(prependIf('world', 'hello ', true)).to.eql('hello world');
    });

    it('should not prepend if customCondition is false', () => {
      expect(prependIf('world', 'hello ', false)).to.eql('world');
    });
  });
});
