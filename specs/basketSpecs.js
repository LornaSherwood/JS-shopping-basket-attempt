var assert = require('assert');
var basket = require('../basket');
var item1 = require('../item1');
var item2 = require('../item2');

describe('basket', function() {

  it('contents start empty', function(){
    assert.equal(0, basket.contents.length);
  })

  it('can add item', function(){
    basket.addItem(item1);
    assert.equal(1, basket.contents.length);
  })

  it('can remove item', function(){
    basket.removeItem(item1);
    assert.equal(0, basket.contents.length);
  })

  it('can count items in basket', function(){
    basket.addItem(item1);
    basket.addItem(item2);
    assert.equal(2, basket.contents.length)
  })

  it('can calculate total', function(){
    assert.equal(23.99, basket.total())
  })

})

