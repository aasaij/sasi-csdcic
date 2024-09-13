let bodyElement = document.getElementById("b1");
for (let i = 1; i <= 500; i++) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let btn = document.createElement("button");
  btn.textContent = i;
  btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  btn.addEventListener("mouseover", function (e) {
    // alert(e.target.innerHTML);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
  bodyElement.appendChild(btn);
}

/*
Looping statement
    while
        while(<condition>){
            <statements>
        }
    for
        for (<initial_value>;<condition>;<updation>){
        <statements>
        }
    do..while
*/
