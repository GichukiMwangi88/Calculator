//Functions that do basic math

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//Operator function that takes an operator
//and 2 numbers and calls one of the above
//functions on the numbers

const operate = function calculate(a, b, oper) {
    //initialize result variable

    let result = 0;

    switch (oper) {
        case add:
            result = a + b;
            break;
        case subtract:
            result = a - b;
            break;
        case multiply:
            result = a * b;
            break;
        case divide:
            if (b === 0) {
                return "Can't divide by zero"
            } else {
                result = a / b;
            }
            break;
    }

    return result;

}

//Event listeners for the button elements of the calculator
//Select all the elements and store them in a variable
//to allow DOM manipulation

const buttons = document.querySelectorAll("#number");

const displayText = document.querySelector(".display");

const operators = document.querySelectorAll("#operator");

//Function to display clicked numbers on the calculator display

let selectionArray = [];

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let selection = event.target.textContent;
        displayText.textContent += selection;
    })
});

console.log(selectionArray);

//Function to display operators on the calculator display

operators.forEach(function (operator) {
    operator.addEventListener('click', function (event) {
        let operatorSelection = event.target.textContent;
        displayText.textContent += operatorSelection;
    })
});

