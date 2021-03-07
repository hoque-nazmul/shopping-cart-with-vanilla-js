const increamentBtn = document.getElementsByClassName('btn-increament');
const decreamentBtn = document.getElementsByClassName('btn-decreament');
const productsAmount = [...document.getElementsByClassName('amount')];
const subTotal = document.getElementById('sub-total');
const grandTotal = document.getElementById("grand-total");
const tax = document.getElementById('tax');
const amounts = [];
let subTotalAmount = 0;

productsAmount.forEach(amount => {
    amounts.push(+amount.innerText);
    subTotalAmount += +amount.innerHTML;
});

subTotal.innerText = subTotalAmount;
let taxAmount = Math.round(subTotalAmount * 0.1);
tax.innerText = taxAmount;
grandTotal.innerText = subTotalAmount + taxAmount;


[...increamentBtn].forEach((btn, i) => { 
    btn.addEventListener('click', function () { 
        let qty = +this.previousElementSibling.value;
        this.previousElementSibling.value = qty + 1;
        this.parentNode.nextElementSibling.innerText =
            +this.previousElementSibling.value * amounts[i];
        let subTotalAmount = 0;
        productsAmount.forEach(amount => {
            subTotalAmount += +amount.innerHTML;
        });
        subTotal.innerText = subTotalAmount;

        let taxAmount = Math.round(subTotalAmount * 0.1);
        tax.innerText = taxAmount;
        grandTotal.innerText = subTotalAmount + taxAmount;
    });
});

[...decreamentBtn].forEach((btn, i) => { 
    btn.addEventListener('click', function () { 
        let qty = +this.nextElementSibling.value;
        if (qty > 1) {
          this.nextElementSibling.value = qty - 1;
        }
        this.parentNode.nextElementSibling.innerText =
            +this.nextElementSibling.value * amounts[i];
        let subTotalAmount = 0;
        productsAmount.forEach(amount => {
            subTotalAmount += +amount.innerHTML;
        });
        subTotal.innerText = subTotalAmount;

        let taxAmount = Math.round(subTotalAmount * 0.1);
        tax.innerText = taxAmount;
        grandTotal.innerText = subTotalAmount + taxAmount;
    });
});
// [...decreamentBtn].forEach((btn, i) => {
//   btn.addEventListener("click", function () {
//     let qty = +this.nextElementSibling.value;
//       if (qty > 1) { 
//         this.nextElementSibling.value = qty - 1;
//       }
//     this.parentNode.nextElementSibling.innerText =
//       +this.nextElementSibling.value * amounts[i];
//     let subTotalAmount = 0;
//     productsAmount.forEach((amount) => {
//       subTotalAmount += +amount.innerHTML;
//     });
//     subTotal.innerText = subTotalAmount;

//     let taxAmount = Math.round(subTotalAmount * 0.1);
//     tax.innerText = taxAmount;
//     grandTotal.innerText = subTotalAmount + taxAmount;
//   });
// });