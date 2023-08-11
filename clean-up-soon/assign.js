// write a function that returns the square of two numbers

function squareOfTwoNumbers(firstNumber, secondNumber) {
    return firstNumber ** secondNumber
}

console.log(squareOfTwoNumbers(2, 2));

// write a function that returns true if a number an even number or false is the number is an odd number

let isEven = num => num % 2 === 0;

console.log(isEven(3))
console.log(isEven(10))
console.log(isEven(17))
console.log(isEven(15))

// write a function that has two parameters time and name, that returns a string "with a greeting"

let name = " Atomic"
let time = ["Good morning", "Good afternoon", "Good evening"]


for (let i = 0; i < time.length; i+= 1) {
        console.log(time[i] + "," + name + "!")
    }


    // write a function that dynamically increment the values of an array only when those values are greater than 10

    // const value = [15, 3, 4, 11, 17, 10]
    // for (let i = 0; i < value.length; i+= 1) {
    //    if (value[i] <= 10) {
    //     console.log(value[i] + 0)
    //    } else {
    //     console.log(value[i] + 2)
    //    }
        
        
    // }
    // let number = 10
    // function addition(number) {
    //     if (number < 10) {
    //         return number 
    //     } else {
    //         return number + 2 
    //     }
       
    // }
    // console.log(addition(10))
    // console.log(addition(5))
    // console.log(addition(17))
    // console.log(addition(9))

    let number = [10, 2, 5, 15, 8, 19]
    function addition(number) {
        return number + 3
    }

console.log(number[1])


// correction:
console.log('\n\nCorrection: \n');
//1.
function squareOfNumber(number) {
    return number ** 2;
}

console.log(squareOfNumber(4));

// 3.
function greeting(time, name) {
    return `Good ${time}, ${name}!`;
}

console.log(greeting('morning', 'Jesus'));
console.log(greeting('Evening', 'Damilare'));
console.log(greeting('night', 'Pricillia'));

function incrementArrayNumbers(incrementValue) {
    let arrayOfNumbers = [15, 3, 4, 11, 17, 10];
    for (let i = 0; i < arrayOfNumbers.length; i += 1) {
        if (arrayOfNumbers[i] > 10) {
            arrayOfNumbers[i] += incrementValue;
        }
        // console.log(`Did arrayOfNumbers ${i} change? ---> ${arrayOfNumbers[i]}`);
    }

    return arrayOfNumbers;
}

console.log(incrementArrayNumbers(2));
console.log(incrementArrayNumbers(1));
console.log(incrementArrayNumbers(10));
console.log(incrementArrayNumbers(20));