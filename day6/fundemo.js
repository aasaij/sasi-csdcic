// function add(x, y) {
//   return x + y;
// }

// function minus(x, y) {
//   return x - y;
// }
// Arrow Functions  --> Anonymous Functions
let add = (x, y) => x + y;
let minus = (x, y) => x - y;
// let greet = () => {
//   let element = document.getElementById("h1");
//   h1.innerHTML = "Good Morning";
// };
let greet = (user) => {
  let element = document.getElementById("h1");
  h1.innerHTML = `Good Morning ${user}`;
};
