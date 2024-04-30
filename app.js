let cartContaier = document.querySelector(".cart-container");
let cartIcon = document.getElementById("cart");

let badage = document.querySelector(".badage");
let submitButton = document.querySelector(".submit-button");
let orderDiscription = document.querySelector(".order-discription");
let orderPreview = document.querySelector(".order-preview");
// let empty = document.querySelector(".empty");

let number = document.querySelector(".number");
let count = 0;
let plusIcon = document.querySelector(".plus-icon");
let minusICON = document.querySelector(".minus-icon");

cartContaier.classList.add("hidden");
cartIcon.addEventListener("click", function () {
  cartContaier.classList.toggle("hidden");
});

plusIcon.addEventListener("click", function () {
  count++;
  console.log(count);
  number.innerHTML = count;
  badage.innerHTML = `${count}`;
  orderDiscription.innerHTML = `Fall Limited Edition Sneakers<br/>$125.00 x ${count} <b>= $${
    125.0 * count
  }</b>`;
});

minusICON.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  console.log(count);
  number.innerHTML = count;
  badage.innerHTML = `${count}`;
  orderDiscription.innerHTML = `Fall Limited Edition Sneakers<br/>$125.00 x ${count} <b>= $${
    125.0 * count
  }</b>`;
});

badage.classList.add("hidden");
orderPreview.classList.add("hidden");

submitButton.addEventListener("click", function () {
  badage.classList.remove("hidden");
  // empty.classList.add("hidden");
  badage.innerText = `${count}`;
  if (count > 0) {
    orderPreview.classList.remove("hidden");
  }
});
