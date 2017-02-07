var customer = {
  name: "Kristie",
  loyalty: true,
  baskets: [],
  getBasket: function(basket){
    this.baskets.push(basket);
  }
}

module.exports = customer;