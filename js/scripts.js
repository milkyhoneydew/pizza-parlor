//Business Logic

function Pizza() {
  this.toppings = [];
  this.size = "";
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

