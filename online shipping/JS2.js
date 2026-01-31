let itemPrice = 250;

let value = 0;

let quantity = +prompt(
  "welcome , how many Golden BANANA would you like to Order ?",
);

value = itemPrice * quantity;

let finalPrice = 0;
if (value >= 1000) {
  let shipping = 0;
  finalPrice = value;
  alert("your order cost " + value + " EGP");
  console.log("Order Cost " + value + " EGP");
  console.log("Shipping Cost " + shipping + " EGP");
} else {
  shipping = 60;
  finalPrice = value + shipping;
  alert("your order cost " + value + " EGP" + "Shipping 60 EGP");
  console.log("Order Cost " + value + " EGP");
  console.log("Shipping Cost " + shipping + " EGP");
}

let dis10 = "SAVE10";

let disApply = prompt("Do You have any Discount Copoun ?");

if (disApply == dis10) {
  finalPrice = finalPrice - finalPrice * (10 / 100);
  alert("GREAT!! now you saved 10% of your order .");
  console.log("10% Discount Applied");
  console.log(" your order now cost " + finalPrice + " EGP");
}

let VAT = finalPrice * (14 / 100);

finalPrice = finalPrice + VAT;
console.log("Order Cost + 14% VAT is " + finalPrice + " EGP");
