var basket = {
  contents: [],
  addItem: function(item) {
    this.contents.push(item);
  },
  removeItem: function(item) {
    var index = this.contents.indexOf(item);
    this.contents.splice(index, 1);
  },
  total: function() {
    var sum = 0;
    for (var item of this.contents){
      sum += item.cost;
    }
    return sum.toFixed(2);
  }
}

module.exports = basket;
