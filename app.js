// Obtener los elementos del DOM
const resultLabel = document.getElementById("result");
const buttons = document.querySelectorAll(".calculadora__button");

// Variable para almacenar los números y operaciones
let currentNumber = "";
let previousNumber = "";
let currentOperator = "";

// Función para actualizar el resultado en la etiqueta
const updateResult = () => {
  resultLabel.textContent = currentNumber;
};

// Función para realizar la operación matemática
const calculate = () => {
  // Convertir los números de cadena a número
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);

  // Realizar la operación según el operador actual
  switch (currentOperator) {
    case "+":
      currentNumber = num1 + num2;
      break;
    case "-":
      currentNumber = num1 - num2;
      break;
    case "/":
      currentNumber = num1 / num2;
      break;
    case "x":
      currentNumber = num1 * num2;
      break;
  }

  // Convertir el resultado de nuevo a cadena
  currentNumber = currentNumber.toString();
};

// Event Listener para los botones
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Verificar si el botón es un número
    if (button.classList.contains("data--number")) {
      currentNumber += value;
      updateResult();
    }
    // Verificar si el botón es el de igual "="
    else if (value === "=") {
      calculate();
      updateResult();
      // Reiniciar las variables después de la operación
      previousNumber = "";
      currentOperator = "";
    }
    // Verificar si el botón es el de limpiar "C"
    else if (value === "C") {
      // Limpiar todas las variables y reiniciar el resultado
      currentNumber = "";
      previousNumber = "";
      currentOperator = "";
      updateResult();
      resultLabel.textContent = 0;
    }
    // El botón es un operador
    else {
      // Almacenar el número actual y el operador
      previousNumber = currentNumber;
      currentNumber = "";
      currentOperator = value;
    }
  });
});
