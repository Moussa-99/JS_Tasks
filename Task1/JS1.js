let userRegistry = 0;
let mCost = 350;

let finalPrice = 0;
let userApp = +prompt("welcome , how many months you want to apply ?");
alert(
  "with Pleasure if you register for +6 months you have 10% DIS or if applied for +12 you have 15% DIS , thanks for your patience .",
);

if (userApp >= 6 && userApp < 12) {
  userRegistry = mCost * userApp;
  let disUp6 = userRegistry * (10 / 100);
  finalPrice = userRegistry - disUp6;
  alert("Now You Have Discount for you Registry 10%");
  console.log(
    "a Month cost 350 EGP and your Months value now " + finalPrice + " EGP",
  );
} else if (userApp >= 12) {
  userRegistry = mCost * userApp;
  let disUp12 = userRegistry * (15 / 100);
  finalPrice = userRegistry - disUp12;
  alert("Now You Have Discount for you Registry 15%");
  console.log(
    "a Month cost 350 EGP and your Months value now " + finalPrice + " EGP",
  );
}

let userPT = confirm("would you like to have a Personal Trainer ?");

if (userPT == true) {
  let PT = 200;
  let ptmonth = PT * userApp;
  finalPrice = finalPrice + ptmonth;
  alert("Sir , You applied for a Personal Trainer for 200 EGP/month");
  console.log(
    "appling for Personal trainer 200 EGP/month Cost " + ptmonth + " EGP",
  );
  console.log("your Months Value now " + finalPrice + " EGP");
}

let VAT = finalPrice * (14 / 100);
finalPrice = finalPrice + VAT;
console.log("Your Final Value + VAT 14% is " + finalPrice + " EGP");
alert("Thank For You Registery! here is Your Receipt Details");
