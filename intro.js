
console.log('INTRO TO FUNCTIONS [functions with parameters/arguments, dynamic values and varied output]\n');

console.log('1a. Sum of 2 numbers function returning the sum of 2 numbers (as a number):');
function sumOfTwoNumbers1st(firstNumber, secondNumber) {  
    return firstNumber + secondNumber;
}
console.log(sumOfTwoNumbers1st(3, 4));
console.log(sumOfTwoNumbers1st(5, 6));


console.log('\n1b. Sum of 2 numbers function returning the sum of 2 numbers (in a string):');
function sumOfTwoNumbers2nd(firstNumber, secondNumber) {  
    return `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
}
console.log(sumOfTwoNumbers2nd(3, 4));
console.log(sumOfTwoNumbers2nd(5, 6));


console.log('\n2a. function is undefined when there is no return value - undefined reflects in the final output: ')
function sumOfTwoNumbers3rd(firstNumber, secondNumber) {  
     console.log(firstNumber + secondNumber)
}
console.log(`final score is ${sumOfTwoNumbers3rd(3, 4)}`)


console.log('\n2b. function has return value and reflects in final output: ')
function sumOfTwoNumbers(firstNumber, secondNumber) {  
    return firstNumber + secondNumber;
}
console.log(`final score is ${sumOfTwoNumbers(3, 4)}`)

// Assignments:
// write a function that returns the square of two numbers
// write a function that returns true if a number an even number or false is the number is an odd number
// write a function that has two parameters time and name, that returns a string "with a greeting" e.g "Good morning, mary" 