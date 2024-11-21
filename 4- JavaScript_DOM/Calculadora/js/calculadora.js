let displayValue = "";
let currentOperation = null;
let previousValue = "";

const display = document.getElementById("display");
const operationDisplay = document.getElementById("operation-display");

// Carregar o som de bip
let beep = new Audio("sounds/beep.mp3");

// Função para atualizar o display
function updateDisplay() {
  display.value = displayValue;
  operationDisplay.textContent =
    previousValue && currentOperation
      ? `${previousValue} ${currentOperation}`
      : "";
}

// Função para adicionar números ao display
function appendNumber(number) {
  playBeep(); // Toca o som do bip
  if (displayValue === "0" && number !== ".") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

// Função para definir a operação matemática
function setOperation(operation) {
  playBeep(); // Toca o som do bip
  if (displayValue === "" && operation === "-") {
    displayValue = "-";
    updateDisplay();
    return;
  }
  if (previousValue && currentOperation) {
    calculate();
  }
  currentOperation = operation;
  previousValue = displayValue;
  displayValue = "";
  updateDisplay();
}

// Função para realizar o cálculo
function calculate() {
  playBeep(); // Toca o som do bip
  let result;
  const prev = parseFloat(previousValue);
  const current = parseFloat(displayValue);

  if (isNaN(prev) || isNaN(current)) return;

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "Erro" : prev / current;
      break;
    default:
      return;
  }

  displayValue = result.toString();
  currentOperation = null;
  previousValue = "";
  updateDisplay();
}

// Função para limpar o display
function clearDisplay() {
  playBeep(); // Toca o som do bip
  displayValue = "";
  previousValue = "";
  currentOperation = null;
  updateDisplay();
}

// Função para apagar o último caractere
function deleteLast() {
  playBeep(); // Toca o som do bip
  displayValue = displayValue.toString().slice(0, -1);
  updateDisplay();
}

// Função para tocar o som de bip
function playBeep() {
  beep.play();
}
