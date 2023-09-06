//bootstrap code to toggle theme dark or light
function myFunction() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}

//for dynamic copyright year
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

//for add to cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const displayCartitems = document.getElementById("cart-items");
const checkOutButton = document.getElementById("check-out-button");

let cartItems = [];

function addItemsToCart() {
  displayCartitems.innerHTML = ""; //avoid duplicated item 

  cartItems.forEach((eachItem, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${eachItem.pen} = ${eachItem.cost}`;
    displayCartitems.appendChild(listItem);
  });

  totalCost = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.cost.replace("$", "")),
    0
  );
  document.getElementById("total-cart-items").textContent = totalCost;
}
addToCartButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const penSelected = button.closest(".product");
    const penName = penSelected.querySelector("h3").textContent;
    const penCost = penSelected.querySelector("h2").textContent;

    const newList = {
      pen: penName,
      cost: penCost,
    };

    cartItems.push(newList);
    addItemsToCart();

    checkOutButton.addEventListener("click", function () {
      alert("Your order has been received, Thank you for shopping");
    });
  });
});

const userEmail = document.getElementById("newsletter1");
document
  .getElementById("subscribe-button")
  .addEventListener("click", (event) => {
    const userEmailValue = userEmail.value;

    if (userEmailValue === "") {
      alert("Email address not entered");
    } else {
      alert("submitted");
    }
  });

const backToTop = document.getElementById("back-to-top");
backToTop.addEventListener("click", (event) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
