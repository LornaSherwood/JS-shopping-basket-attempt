var assert = require('assert');
var item1 = require('../item1');

describe('item1', function() {

  it('has name', function(){
    assert.equal("book", item1.name);
  })

  it('has cost', function() {
    assert.equal(12.99, item1.cost);
  })

})