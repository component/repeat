/**
 * Module Dependencies
 */

var repeat = require('repeat');
var assert = require('assert');

/**
 * Tests
 */

describe('repeat', function() {
  it('should repeat 0 times', function() {
    assert('' == repeat('ho', 0))
  })

  it('should repeat 1 time', function() {
    assert('ho' == repeat('ho', 1))
  })

  it('should repeat n times', function() {
    assert('hohohoho' == repeat('ho', 4))
  })
})
