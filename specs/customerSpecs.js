var assert = require('assert');
var customer = require('../customer');
var basket = require('../basket');

describe('customer', function() {

  it('has name', function() {
    assert.equal("Kristie", customer.name);
  }),

  it('has loyalty', function(){
    assert.equal(true, customer.loyalty);
  }),

  it('has basket', function(){
    customer.getBasket(basket);
    assert.equal(basket, customer.baskets[0]);
  })

})