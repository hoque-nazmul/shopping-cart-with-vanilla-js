export const productsAmount = [...document.getElementsByClassName("amount")];

// Set amount with $ icon
const setAmount = (amount) => `$ ${amount}`;

/***
  Calculate & Set Value of Total
***/
const totalController = (removedProductCost = 0) => {
  const subTotal = document.getElementById("sub-total");
  const grandTotal = document.getElementById("grand-total");
  const tax = document.getElementById("tax");
  let subTotalAmount = 0;
  productsAmount.forEach((amount) => {
    subTotalAmount += +amount.innerHTML;
  });
  if (removedProductCost) {
    subTotalAmount = subTotalAmount - removedProductCost;
  }
  let taxAmount = Math.round(subTotalAmount * 0.1);
  subTotal.innerText = setAmount(subTotalAmount);
  tax.innerText = setAmount(taxAmount);
  grandTotal.innerText = setAmount(subTotalAmount + taxAmount);
};

export default totalController;
