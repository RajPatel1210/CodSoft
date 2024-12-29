function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (value === 'mod') {
      display.value += '%';
  } else {
      display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      let expression = display.value.replace(/%/g, '/100');
      display.value = eval(expression);
  } catch (error) {
      display.value = 'Error';
  }
}

function square() {
  const display = document.getElementById('display');
  try {
      display.value = Math.pow(parseFloat(display.value), 2);
  } catch (error) {
      display.value = 'Error';
  }
}

function squareRoot() {
  const display = document.getElementById('display');
  try {
      display.value = Math.sqrt(parseFloat(display.value));
  } catch (error) {
      display.value = 'Error';
  }
}

