import displayEmptyMsg from "./displayErrorMsg.js";
import totalController, { productsAmount } from './totalController.js';

const increamentBtn = document.getElementsByClassName("btn-increament");
const decreamentBtn = document.getElementsByClassName("btn-decreament");
const removeIcons = document.getElementsByClassName("remove-item");

// Store the cost of all products
const amounts = [];
productsAmount.forEach((amount) => {
  amounts.push(+amount.innerText);
});

/*** 
  Cart Controller with the handling of increament & decreament process
***/
const handleCart = (actionBtn, isIncreament) => {
  [...actionBtn].forEach((btn, i) => {
    btn.addEventListener("click", function () {
      let qty = +this.parentNode.children[1].value;
      if (isIncreament) {
        this.parentNode.children[1].value = qty + 1;
      } else {
        if (qty > 1) {
          this.parentNode.children[1].value = qty - 1;
        }
      }
      this.parentNode.nextElementSibling.innerText =
        +this.parentNode.children[1].value * amounts[i];
      totalController();
    });
  });
};

/*** 
  Remove Cart Item Functionalities
***/
[...removeIcons].forEach((removeIcon) => {
  removeIcon.addEventListener("click", function () {
    let removedProductCost = parseFloat(this.previousElementSibling.innerText);
    this.parentNode.parentNode.parentNode.remove();
    totalController(removedProductCost);
    displayEmptyMsg();
  });
});

// display msg in initial empty state
displayEmptyMsg();

// Calculate & Set value of Total before event
totalController();

// Handle Increamental process
handleCart(increamentBtn, true);

// Handle Decreamental process
handleCart(decreamentBtn, false);
