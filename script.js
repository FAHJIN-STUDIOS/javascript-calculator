const display = document.getElementById("display");

function appendCharacter(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  if (!display.value) return;
  try {
    display.value = Function('"use strict"; return (' + display.value + ')')();
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1500);
  }
}