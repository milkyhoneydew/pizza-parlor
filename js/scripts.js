//Business Logic

function Pizza() {
  this.toppings = [];
  this.size = "";
  this.price = 0;
}

Pizza.prototype.addTopping = function(...topping) {
  this.toppings.push(...topping);
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

//UI Logic

function getSize() {
  let size = "";
  let radioButtons = document.querySelectorAll("input[type=radio]");
  for (i=0; i<radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      size = radioButtons[i].id;
    }
  }
  return size;
}

function getToppings() {
  let toppings = [];
  let checkboxes = document.querySelectorAll("input[type=checkbox]");
  for (i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      toppings.push(checkboxes[i].id)
    }
  }
  return toppings;
}

function submitPizza(e) {
  e.preventDefault();
  let customPizza = new Pizza();
  let customSize = getSize();
  let customToppings = getToppings();
  customPizza.pickSize(customSize);
  customPizza.addTopping(...customToppings);
  customPizza.calculatePrice();
  let customPrice = customPizza.price;
  document.querySelector("#price").innerText = customPrice;
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", submitPizza);
})