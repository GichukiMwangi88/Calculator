//Functions that do basic math

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "LOL";
  } else {
    return a / b;
  }
}

//Create a new function that takes 2 numbers
//and an operator and calculates the result
//when called

function operation() {
  //convert the operands from strings to numbers to enable math operations
  previousOperand = Number(previousOperand);
  currentOperand = Number(currentOperand);
  switch (operator) {
    case "+":
      return add(previousOperand, currentOperand);
    case "-":
      return subtract(previousOperand, currentOperand);
    case "*":
      return multiply(previousOperand, currentOperand);
    case "/":
      return divide(previousOperand, currentOperand);
  }
}

//Global variables

let operator = "";
let previousOperand = "";
let currentOperand = "";
let result = "";

//DOM Elements and their variables

let clear = document.querySelector("#clear");
let equal = document.querySelector("#equals");

let numbers = document.querySelectorAll("#number");
let operators = document.querySelectorAll("#operator");

let decimal = document.querySelector("#decimal");

//Going to have 2 screens that will display previous
// and current operands.

let previousDisplay = document.querySelector(".previous");
let currentDisplay = document.querySelector(".current");

//Event listeners for the HTML elements

//Number buttons

numbers.forEach(function (number) {
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent); //display the content of the HTML element
    handleDecimal();
    currentDisplay.textContent = currentOperand;
  });
});

//Function to handle the numbers clicked

function handleNumber(num) {
  //limit the length of the numbers the user can input
  if (currentOperand.length <= 4) {
    currentOperand += num;
  }
}

//Function to handle the decimal input
//limit the decimal typed to one

function handleDecimal() {
  if (decimal.length > 1) {
    return;
  } else {
    return decimal;
  }
}

//Handle the operators when clicked

operators.forEach(function (op) {
  op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousDisplay.textContent = previousOperand + " " + operator;
    currentDisplay.textContent = currentOperand;
  });
});

//Function for operators

function handleOperator(op) {
  operator = op;

  previousOperand = currentOperand;
  currentOperand = "";
}

//Reset the display

clear.addEventListener("click", function () {
  previousOperand = "";
  currentOperand = "";
  operator = "";
  previousDisplay.textContent = "";
  currentDisplay.textContent = "";
});

//Calculate the result

equal.addEventListener("click", function () {
  //Validate that the previous and current display aren't
  //empty to allow operation
  if (previousDisplay.textContent !== "" && currentDisplay.textContent !== "") {
    result = operation();
    round();
    if (previousDisplay.textContent !== "") {
      //displays the current result of operation
      previousDisplay.textContent = result;
    }
    currentDisplay.textContent = result; //displays the current result on the current display
  }
});

//Function to round numbers to 2 decimal places

function round() {
  result = Math.round(result * 100) / 100;
}
