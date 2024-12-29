const display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operator = "";


function initializeCalculator() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) =>
    button.addEventListener("click", () => handleButtonClick(button.textContent))
  );
}

// Обработчик кликов по кнопкам
function handleButtonClick(value) {
  if (isNumber(value) || value === ".") {
    handleNumberInput(value);
  } else if (value === "AC") {
    resetCalculator();
  } else if (value === "+/-") {
    toggleSign();
  } else if (value === "=") {
    calculateResult();
  } else {
    handleOperator(value);
  }
}

// Проверка, является ли значение числом
function isNumber(value) {
  return !isNaN(value);
}

// Обработка чисел и точки
function handleNumberInput(value) {
  if (value === "." && currentNumber.includes(".")) return; 
  currentNumber += value;
  updateDisplay(currentNumber);
}

function toggleSign() {
  if (currentNumber === "") return;
  currentNumber = (parseFloat(currentNumber) * -1).toString();
  updateDisplay(currentNumber);
}

// Сброс 
function resetCalculator() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay("0");
}

// Обработка операторов
function handleOperator(op) {
  if (currentNumber === "") return;

  if (previousNumber === "") {
    previousNumber = currentNumber;
  } else if (operator) {
    previousNumber = calculate(previousNumber, currentNumber, operator).toString();
    updateDisplay(previousNumber);
  }

  operator = op;
  currentNumber = "";
}

// результат
function calculateResult() {
  if (previousNumber === "" || currentNumber === "" || operator === "") return;

  const result = calculate(previousNumber, currentNumber, operator);
  updateDisplay(result);
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
}

// вычисления
function calculate(num1, num2, op) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "×":
      return num1 * num2;
    case "÷":
      return num2 === 0 ? "Error" : num1 / num2;
    default:
      return 0;
  }
}

// Обновление дисплея
function updateDisplay(value) {
  display.textContent = value;
}

initializeCalculator();






// let calculator = {
//   firstNum: 0,
//   operator: '',
//   lastNum: 0,
//   display: 0,
// }

// function Addition(num1, num2) {
//   return num1 + num2;
// }
// function Subtraction(num1, num2) {
//   return num1 - num2;
// }
// function Multiplication(num1, num2) {
//   return num1 * num2;
// }
// function Division(num1, num2) {
//   return num1 / num2;
// }

// console.log(Addition(5, 5))

// function operate(operator, num1, num2) {
//   if (operator === '+') {
//     return Addition(num1, num2)
//   }
//   else if (operator === '-') {
//     return Subtraction(num1, num2)
//   }
//   else if (operator === '*') {
//     return Multiplication(num1, num2)
//   }
//   else if (operator === '/') {
//     return Division(num1, num2)
//   }
// }

// console.log(operate('+', 5, 5))

// function getNumDisplay() {
//   let num = document.querySelectorAll('.button')

//   document.addEventListener('keydown', (event) => {
//     if (Number(event.key) === 1) {

//     }
//   })

// }

// getNumDisplay()

//при клике на первую цифру мы цифру сохраняем в 1 переменной обекта если это переменная равна null
//эту переменную пушим в переменную дисплай
//при клике на оператор  мы  сохраняем в 2 переменной обекта
//эту переменную пушим в переменную дисплай
//при клике на 2 цифру  если 1 переменная не равна Null то мы  сохраняем в 3 переменной обекта а и наче в первой переменной
//эту переменную пушим в переменную дисплай

//при клике на равно мы вызываем с всеми итими 3 переменными нашу функцию opуrate
//результат который нам он дает мы сохраняем в перемнной дисплай и показываем
// и сохраняем в 1 переменной обектаа
//и при
// и обнуляем 2 и 3 переменные обекта
//о
