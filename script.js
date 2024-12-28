const color = document.getElementById("color");
color.addEventListener("input", function (event) {
  let selectedColor = event.target.value;

  document.getElementById("colortext").textContent = selectedColor;

  document.getElementById("valueColor").style.backgroundColor = selectedColor;
});
