var transaction = {
  customers: [],
  discounts: [],
  getCustomer: function(customer){
    this.customers.push(customer);
  },
  getDiscount: function(discount){
    this.discounts.push(discount);
  },
  applyRelevantDiscounts: function(){
    var totalCost = customers[0].basket.total(); //works?
    for (var discount of this.discounts) {
      var deduction = discount.calculateDiscount(totalCost); //figure to deduct
      totalCost -+ deduction;
    }
    return totalCost.toFixed(2);
  }

}


module.exports = transaction;