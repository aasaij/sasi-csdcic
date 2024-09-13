let textElement = document.getElementById("display");
let calculated = false;
function append(value) {
  if (calculated) {
    textElement.value = value;
    calculated = false;
  } else {
    textElement.value += value;
  }
}
function calculate() {
  let expression = textElement.value;
  let result = eval(expression);
  textElement.value = result;
  calculated = true;
}
function clearAll() {
  textElement.value = "";
  calculated = false;
}
function changeSign() {
  let expression = textElement.value;
  let firstChar = expression.charAt(0);
  if (firstChar === "-") {
    textElement.value = expression.slice(1);
  } else {
    textElement.value = "-" + expression;
  }
}
function backSpace() {
  let expression = textElement.value;
  textElement.value = expression.slice(0, -1);
}
function memorySave() {
  let memory = textElement.value;
  localStorage.setItem("memory", memory);
}
function memoryRestore() {
  let data = localStorage.getItem("memory");
  if (data) {
    textElement.value = data;
    calculated = true;
  }
}

function memoryCancel() {
  localStorage.removeItem("memory");
}
function memoryAdd() {
  let memory = textElement.value;
  let current = Number(localStorage.getItem("memory") || 0);
  localStorage.setItem("memory", current + Number(memory));
}
function memoryMinus() {
  let memory = textElement.value;
  let current = Number(localStorage.getItem("memory") || 0);
  localStorage.setItem("memory", current - Number(memory));
}

MongoDB;
