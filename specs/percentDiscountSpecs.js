var assert = require('assert');
var percentDiscount = require('../percentDiscount')
var item1 = require('../item1');
var basket = require('../basket');
var customer = require('../customer')

describe('customer', function() {

  it('should have percent discount', function() {
    assert.equal(10, percentDiscount.percent)
  }),

  it('should have limit', function() {
    assert.equal(20, percentDiscount.limit)
  })

})