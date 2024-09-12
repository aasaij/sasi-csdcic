function calculate() {
  let p = document.getElementById("principal").value;
  let r = document.getElementById("rate").value;
  let t = document.getElementById("years").value;
  let s = document.getElementById("simple");
  let c = document.getElementById("compound");
  let res = document.getElementById("result");
  let interest;
  if (s.checked === true) interest = (p * t * r) / 100;
  else if (c.checked === true) interest = p * (1 + r / 100) ** t - p;
  else interest = "Invalid choice";
  if (typeof interest !== "string") res.value = interest.toFixed(2);
  else res.value = interest;
}

// https://bit.ly/RA-120924
