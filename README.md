# Pancho's Pizza Parlor

#### By Tanya Prado
*Photo by Jordan Madrid on Unsplash

## Website allowing a user to create a customized pizza and returning the total price. 

## Technologies Used

* HTML
* CSS
* Javascript

## Description

This website provides a form for the user to choose the size of a pizza and whatever toppings they wish. Once the user is happy with their choices, they click the "Calculate Price" button, which displays the total cost of their custom pizza. 


## Setup/Installation Requirements

* Clone the repository onto your own machine.
* Locate the pizza-parlor folder.
* Double-click on the index.html file to open the website in your browser.
* Click on the size and toppings of your choosing, followed by the "Calculate Price" button to reveal the cost of the pizza!

## Known Bugs

* None.

## License

MIT Copyright (c) 2022 Tanya Prado

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

Describe: Pizza.prototype.calculatePrice()

Test: "It should total the price of the pizza from the chosen size and toppings."
Code: Pizza.calculatePrice();
Expected Outcome: {
  this.price = price;
}
```