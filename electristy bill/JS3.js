let KWH = prompt("Welcome, plese enter you KWH ?");
console.log("Your Bill Details Is :");
let final = 0;
if (KWH <= 100) {
  final = KWH * 0.75;
  final = final + 5;
  console.log("5 EGP Sirv. included");
  console.log("Your KWH cost : " + final + " EGP ");
} else if (KWH > 100) {
  let nFinal = 75;
  let upFinal = KWH - 100;
  final = nFinal + upFinal * 1.2;
  final = final + 5;
  console.log("+ 5 EGP Sirv.");
  console.log("Your KWH cost " + final + " EGP ");
}

let VAT = final * (14 / 100);
console.log("14% VAT : " + VAT + " EGP");
final = final + VAT;

console.log("Your Bill Cost : " + final + " EGP");
