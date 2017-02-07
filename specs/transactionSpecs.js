var assert = require('assert');
var transaction = require('../transaction');
var percentDiscount = require('../percentDiscount');
var item1 = require('../item1');
var item2 = require('../item2');
var basket = require('../basket');
var customer = require('../customer');

describe('transaction', function() {

  it('can get customer', function(){
    transaction.getCustomer(customer)
    assert.equal(customer, transaction.customers[0]);
  })

  it('can get discount', function(){
    transaction.getDiscount(percentDiscount);
    assert.equal(percentDiscount, transaction.discounts[0]);
  })

  it('can calculate basket total', function(){
    var sum = transaction.calculateBasketTotal(customer);
    assert.equal(12.99, sum);
  })

  it('can apply discount to total'), function() {
    customer.getBasket(basket);
    basket.addItem(item1, item2);
    transaction.applyDiscounts();
    assert.equal()
  }
})

