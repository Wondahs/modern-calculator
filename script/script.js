let input = "";
const inputBox = document.querySelector(".input-box");
const resultBox = document.querySelector(".result-box");
const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation-button");
const equalSign = document.getElementById("equal-sign");

// Add event listeners to number buttons
// This is so that when a button is clicked, the input box is updated
// with the button's value
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    input += button.textContent; // input = input + button.textContent
    inputBox.textContent = input;
  });
});

// Demo
// "87*10" -> eval("87*10") -> 870

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Del") {
      input = input.slice(0, -1); // Remove last character
      inputBox.textContent = input; // Update input box
    } else {
      input += button.textContent;
      inputBox.textContent = input;
    }
  });
});

equalSign.addEventListener("click", () => {
  try {
    // let result = eval(input); // Evaluate the expression
    const { num1, num2, operator } = parseInput(input);
    const result = calculate(num1, num2, operator);
    resultBox.textContent = result; // Display the result
  } catch (error) {
    resultBox.textContent = "Error";
  }
});

// Creating custom functions so we don't use eval()
// Input is a string like "87*10"
// We need a way to separate the numbers and the operator
// Lets just handle 2 numbers and 1 operator for now
// Create a function that takes the input and splits it into num1, num2, and operator
// Then pass it to the calculate function

// Function to parse the input
function parseInput(input) {
  // Using switch case to find the operator
  let operator;
  if (input.includes("+")) {
    // string.includes(substring) checks if the substring is available in a string. If input = "87+10", input.includes("+") will return true
    operator = "+";
  } else if (input.includes("-")) {
    operator = "-";
  } else if (input.includes("*")) {
    operator = "*";
  } else if (input.includes("/")) {
    operator = "/";
  }

  // Split the input into numbers based on the operator
  const splitNumbers = input.split(operator); // ["87", "10"]
  // Convert the split strings into numbers
  const convertedNumbers = splitNumbers.map((num) => parseFloat(num)); // [87, 10]
  return {
    num1: convertedNumbers[0],
    num2: convertedNumbers[1],
    operator: operator,
  };
}

function calculate(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
