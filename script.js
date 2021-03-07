const increamentBtn = document.getElementsByClassName('btn-increament');
const decreamentBtn = document.getElementsByClassName('btn-decreament');
const productsAmount = [...document.getElementsByClassName('amount')];
const subTotal = document.getElementById('sub-total');
const grandTotal = document.getElementById("grand-total");
const tax = document.getElementById('tax');

const amounts = [];
// let subTotalAmount = 0;

productsAmount.forEach(amount => {
    amounts.push(+amount.innerText);
    // subTotalAmount += +amount.innerHTML;
});



// subTotal.innerText = subTotalAmount;
// let taxAmount = Math.round(subTotalAmount * 0.1);
// tax.innerText = taxAmount;
// grandTotal.innerText = subTotalAmount + taxAmount;

// Calculate & Set Value of Total
const controlTotal = () => { 
    let subTotalAmount = 0;
    productsAmount.forEach(amount => {
      subTotalAmount += +amount.innerHTML;
    });

    let taxAmount = Math.round(subTotalAmount * 0.1);
    subTotal.innerText = subTotalAmount;
    tax.innerText = taxAmount;
    grandTotal.innerText = subTotalAmount + taxAmount;
}

controlTotal();

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
            
            controlTotal();
            // let subTotalAmount = 0;
            // productsAmount.forEach((amount) => {
            //     subTotalAmount += +amount.innerHTML;
            // });
            // subTotal.innerText = subTotalAmount;
            // let taxAmount = Math.round(subTotalAmount * 0.1);
            // tax.innerText = taxAmount;
            // grandTotal.innerText = subTotalAmount + taxAmount;
        });
    });
}

// For handling Increamental process
handleCart(increamentBtn, true);

// For handling Decreamental process
handleCart(decreamentBtn, false);


// [...increamentBtn].forEach((btn, i) => { 
//     btn.addEventListener('click', function () { 
//         let qty = +this.parentNode.children[1].value;
//         this.parentNode.children[1].value = qty + 1;
//         this.parentNode.nextElementSibling.innerText =
//             +this.parentNode.children[1].value * amounts[i];
//         let subTotalAmount = 0;
//         productsAmount.forEach(amount => {
//             subTotalAmount += +amount.innerHTML;
//         });
//         subTotal.innerText = subTotalAmount;

//         let taxAmount = Math.round(subTotalAmount * 0.1);
//         tax.innerText = taxAmount;
//         grandTotal.innerText = subTotalAmount + taxAmount;
//     });
// });

// [...decreamentBtn].forEach((btn, i) => { 
//     btn.addEventListener('click', function () { 
//         let qty = +this.parentNode.children[1].value;
//         if (qty > 1) {
//           this.parentNode.children[1].value = qty - 1;
//         }
//         this.parentNode.nextElementSibling.innerText =
//             +this.parentNode.children[1].value * amounts[i];
//         let subTotalAmount = 0;
//         productsAmount.forEach(amount => {
//             subTotalAmount += +amount.innerHTML;
//         });
//         subTotal.innerText = subTotalAmount;

//         let taxAmount = Math.round(subTotalAmount * 0.1);
//         tax.innerText = taxAmount;
//         grandTotal.innerText = subTotalAmount + taxAmount;
//     });
// });