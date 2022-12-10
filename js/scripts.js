//Business Logic

function Pizza() {
  this.toppings = [];
  this.size = "";
  this.price = 0;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.pickSize = function(size) {
  this.size = size;
}

Pizza.prototype.calculatePrice = function() {
  if (this.toppings.includes("cheese")) {
    this.price += 2;
  }
  if (this.toppings.includes("sauce")) {
    this.price += 1.50;
  }
  if (this.toppings.includes("pepperoni") || this.toppings.includes("sausage")) {
    this.price += 2;
  }
  if (this.toppings.includes("peppers") || this.toppings.includes("onions") || this.toppings.includes("mushrooms")) {
    this.price += 1;
  }
  if (this.size === "small") {
    this.price += 8;
  } else if (this.size === "medium") {
    this.price += 10;
  } else {
    this.price += 12;
  }
}