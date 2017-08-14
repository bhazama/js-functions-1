/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
  function toString(num){
    return num.toString();
  }
  console.log(toString(1));
/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 function addOne(num){
  return num + 1;
 }
 console.log(addOne(1));

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
 function subOne(num){
  return num - 1;
 }
 console.log(subOne(4));
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
 function addUp(num1, num2){
  return num1 + num2;
 }
 console.log(addUp(2,2));

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 function subSecond(num1, num2){
  return num2 - num1;
 }
 console.log(subSecond(3, 8));
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
 function multi(num1, num2){
  return num1 * num2;
 }
 console.log(multi(2,3));

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 function divFirst(num1, num2){
  return num1 / num2;
 }
 console.log(divFirst(49, 7));

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
 function squared(num){
  return num * num;
 }
 console.log(squared(3)); 

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 function equation(operation, num1, num2){
  var result;
  switch(operation) {
  case "add" :
    result = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + result);
    break;
  case "subtract" :
    result = num1 - num2;
    console.log(num1 + " - " + num2 +" = " + result);
    break;
  case "multiply" :
    result = num1 * num2;
    console.log(num1 + " * "  + num2 + " = " + result);
    break;
  case "divide" :
    result = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + result);
    break;
  default :
    result = 0;
    console.log("This is not a valid operator. Please try again.");
  }
 }
 equation("divide", 2, 3);



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
 function isGreaterThan(num1,num2){
  if (num1 > num2){
    return true;
  }else {
    return false;
  }
 }
 console.log(isGreaterThan(1,5));
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 function isLessThan(num1, num2){
  if (num1 < num2){
    return true;
  }else {
    return false;
  }
 }
 console.log(isLessThan(3,4));
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
  function isEqualTo(num1, num2){
    if (num1 === num2){
      return true;
    }else {
      return false;
    }
  }
  console.log(isEqualTo(3,3));

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
 function min(num1, num2){
  return Math.min(num1,num2);
 }
 console.log(min(33,45));

 
 function min1(num1, num2){
  if (num1 < num2){
    return num1;
  }else{
    return num2;
  }
 }
 console.log(min1(33,45));
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
 function max(num1,num2){
  return Math.max(num1,num2);
 }
 console.log(max(22,44));

 function max1(num1, num2){
  if(num1 > num2){
    return num1;
  }else{
    return num2;
  }
 }
 console.log(max1(33,44));
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 function isEven(num){
  if(num % 2 === 0){
    return true;
  }else {
    return false;
  }
 }
 console.log(isEven(66));
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
 function isOdd(num){
  if (num % 2 ===1){
    return true;
  }else {
    return false;
  }
 }
 console.log(isOdd(12));
/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
 function letterGrader(score, max){
  var percentage = score / max * 100;
  if (percentage >= 90){
    return "A";
  }else if (percentage < 90 && percentage >= 80) {
    return "B";
  }else if (percentage < 80 && percentage >= 70) {
    return "C";
  }else if (percentage < 70 && percentage >= 60) {
    return "D";
  }else {
    return "F";
  }
 }
 console.log(letterGrader(75,100));
/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
 var thing = {
  reviews : 4,
  stars : 3
 };

 function propCheck(obj){
  if (obj.hasOwnProperty("reviews")){
    obj.reviews += 1;
  }else {
    obj.reviews = 1;
  }
  return obj;
  }
  console.log(propCheck(thing));
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
 function compound(word1, word2){
  return word1 + " " + word2;
 }
 console.log(compound("honda", "civic"));

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
 function circleObject(radius){
  var circle = {
    circumference: 2 * Math.PI * radius,
    area: Math.PI * (radius * radius)
  };
  return circle;
 }
console.log(circleObject(4));