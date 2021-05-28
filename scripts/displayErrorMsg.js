/*** 
  Display Empty Message
***/
const cartArea = document.getElementById("cart-content");
const emptyMsg = document.getElementById("empty-msg");

const displayEmptyMsg = () => {
  if (cartArea.children.length < 3) {
    cartArea.style.display = "none";
    emptyMsg.style.display = "block";
  }
};

export default displayEmptyMsg;