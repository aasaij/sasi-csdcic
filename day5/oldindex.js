//Program to calculate compound interest
// let principal = 10000;
// let rate = 14;
// let years = 4.5;
// let interest;
// interest = principal * (1 + rate / 100) ** years;
// console.log(interest.toFixed(2));
let principal, rate, years, cinterest, sinterest;
principal = prompt("Enter principal amount ");
rate = prompt("Enter interest rate ");
years = prompt("Enter number of years");

sinterest = (principal * years * rate) / 100;
cinterest = principal * (1 + rate / 100) ** years - principal;
// document.write("<h1>Compound interest : " + interest.toFixed(2) + "</h1>");
document.write(`<h1>Compound Interest : ${cinterest.toFixed(2)}</h1>`);
document.write(`<h1>Simple Interest : ${sinterest.toFixed(2)}</h1>`);
