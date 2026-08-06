// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return null;
  }
  return x / y;
}

function modulus(x, y) {
  if (y === 0) {
    return null;
  }
  return x % y;
}

function power(x, y) {
  return x ** y;
}

function getTwoNumbers() {
  const first = Number(readlineSync.question("Enter first number : "));
  const second = Number(readlineSync.question("Enter second number: "));
  return [first, second];
}

function showMenu() {
  console.log("============================");
  console.log("     SIMPLE CALCULATOR");
  console.log("============================");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Modulus");
  console.log("6. Exponentiation");
  console.log("7. Quit");
}

function runCalculator() {
  let active = true;

  while (active) {
    showMenu();
    const option = readlineSync.question("Select an operation (1-7): ");

    if (option === "7") {
      console.log("Goodbye!");
      active = false;
      continue;
    }

    const validOptions = ["1", "2", "3", "4", "5", "6"];
    if (!validOptions.includes(option)) {
      console.log("Error: please select a number between 1 and 7.");
      continue;
    }

    const [num1, num2] = getTwoNumbers();
    let outcome;
    let symbol;

    if (option === "1") {
      outcome = add(num1, num2);
      symbol = "+";
    } else if (option === "2") {
      outcome = subtract(num1, num2);
      symbol = "-";
    } else if (option === "3") {
      outcome = multiply(num1, num2);
      symbol = "*";
    } else if (option === "4") {
      outcome = divide(num1, num2);
      symbol = "/";
      if (outcome === null) {
        console.log("Error: Cannot divide by zero.");
        continue;
      }
    } else if (option === "5") {
      outcome = modulus(num1, num2);
      symbol = "%";
      if (outcome === null) {
        console.log("Error: Cannot divide by zero.");
        continue;
      }
    } else if (option === "6") {
      outcome = power(num1, num2);
      symbol = "**";
    }

    console.log("Result: " + num1 + " " + symbol + " " + num2 + " = " + outcome.toFixed(2));
  }
}

runCalculator();
