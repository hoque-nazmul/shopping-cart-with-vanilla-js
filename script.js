const increamentBtn = document.getElementsByClassName('btn-increament');
const decreamentBtn = document.getElementsByClassName('btn-decreament');
const productsAmount = [...document.getElementsByClassName('amount')];

// Store the cost of all products
const amounts = [];
productsAmount.forEach(amount => {
    amounts.push(+amount.innerText);
});

// Set amount with $ icon
const setAmount = amount => `$ ${amount}`;

/*** 
  Calculate & Set Value of Total
***/
const controlTotal = (removedProductCost = 0) => {
    const subTotal = document.getElementById("sub-total");
    const grandTotal = document.getElementById("grand-total");
    const tax = document.getElementById("tax");
    let subTotalAmount = 0;
    productsAmount.forEach(amount => {
        subTotalAmount += +amount.innerHTML;
    });
    if (removedProductCost) {
        subTotalAmount = subTotalAmount - removedProductCost;
    }
    let taxAmount = Math.round(subTotalAmount * 0.1);
    subTotal.innerText = setAmount(subTotalAmount);
    tax.innerText = setAmount(taxAmount);
    grandTotal.innerText = setAmount(subTotalAmount + taxAmount);
}

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
            
            // Calculate & Set value of Total during event handling
            controlTotal();
        });
    });
}

// Calculate & Set value of Total before event
controlTotal();

// Handle Increamental process
handleCart(increamentBtn, true);

// Handle Decreamental process
handleCart(decreamentBtn, false);

const removeIcons = document.getElementsByClassName('remove-item');
[...removeIcons].forEach(removeIcon => { 
    removeIcon.addEventListener('click', function () { 
        let removedProductConst = parseFloat(this.previousElementSibling.innerText);
        this.parentNode.parentNode.parentNode.remove();
        controlTotal(removedProductConst);
    });
})
