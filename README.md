```
Describe: Pizza()

Test: "It should create a pizza object with with toppings and size properties."
Code: new Pizza()
Expected Outcome: {
  toppings: [];
  size: "";
}

Describe: Pizza.prototype.addTopping()

Test: "It should add a topping to the Pizza object."
Code: Pizza.addTopping("cheese");
Expected Outcome: {
  this.toppings = ["cheese"];
}

Describe: Pizza.prototype.pickSize()

Test: "It should add a value to the size key."
Code: Pizza.pickSize("large");
Expected Outcome: {
  this.size = "large";
}
```