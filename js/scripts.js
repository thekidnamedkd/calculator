
const add = function(number1, number2) {
  return number1 + number2;
};

const subtract = function(number1, number2) {
  return number1 - number2;
};

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result = add(number1, number2);
  $("#output").text(result);
  });
});

// //begin subtration function

// const sub = function(number1, number2) {
//   return number1 - number2;
// };

// const sub1 = parseInt(prompt("Enter a number:"));
// const sub2 = parseInt(prompt("Enter another number:"));
// const subResult = sub(sub1, sub2);
// alert(subResult);

// //begin multiplication function

// const mult = function(number1, number2) {
//   return number1 * number2;
// };

// const mult1 = parseInt(prompt("Enter a number:"));
// const mult2 = parseInt(prompt("Enter another number:"));
// const multResult = mult(mult1, mult2);
// alert(multResult);

// //begin division function

// const div = function(number1, number2) {
//   return number1 / number2;
// };

// const div1 = parseInt(prompt("Enter a number:"));
// const div2 = parseInt(prompt("Enter another number:"));
// const divResult = div(div1, div2);
// alert(divResult);