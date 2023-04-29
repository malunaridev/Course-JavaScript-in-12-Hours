/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  if (b <= 0) {
    console.log("Sorry, you cannot divide by 0 or negative numbers");
  } else {
    return a / b;
  }
}

function mul(a, b) {
  return a * b;
}

/* 
    TODO: create a function that console logs the result of any of the above operations.
  */

function result() {
  console.log(sub(1, 2));
}
result();

const result2 = () => {
  console.log(div(1, 0));
};

result2();
