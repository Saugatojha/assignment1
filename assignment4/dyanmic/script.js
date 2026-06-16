const colorBox = document.getElementById("colorBox");
const colorInput = document.getElementById("colorInput");
const resetBtn = document.getElementById("resetBtn");

colorInput.addEventListener("change", function() {
  colorBox.style.backgroundColor = colorInput.value;
});

resetBtn.addEventListener("click", function() {
  colorBox.style.backgroundColor = "#3498db";
  colorInput.value = "#3498db";
});