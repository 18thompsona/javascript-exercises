const add = function(num1, num2) {
  return num1+num2
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(array) {
	let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  array.forEach(element => {
    sum *= element;
  });

  return sum;
};

const power = function(num1, num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num1) {
  let fact = 1;
  if(num1 == 0){
    return 1;
  }
  else{
    for(i = num1; i > 0; i--){
      fact *= i
    }
  }
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
