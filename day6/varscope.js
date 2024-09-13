let counter = 0; //Global variable
let element = document.getElementById("h1");
h1.innerHTML = counter;
let increment = () => {
  counter++;
  h1.innerHTML = counter;
};
let decrement = () => {
  counter--;
  h1.innerHTML = counter;
};

function changeBackgroundColor() {
  let bodyElement = document.getElementById("b1");
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  bodyElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// DOM ==> Document Object Model
