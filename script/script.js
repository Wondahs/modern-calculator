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
    let result = eval(input); // Evaluate the expression
    resultBox.textContent = result; // Display the result
  } catch (error) {
    resultBox.textContent = "Error";
  }
});

function calculate(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
