//begin addition function

const add = function(number1, number2) {
  return number1 + number2;
};

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//begin subtration function

const sub = function(number1, number2) {
  return number1 - number2;
};

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//begin multiplication function

const mult = function(number1, number2) {
  return number1 * number2;
};

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//begin division function

const div = function(number1, number2) {
  return number1 / number2;
};

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = div(number1, number2);
alert(result);