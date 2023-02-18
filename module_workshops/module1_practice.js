// EXERCISE 1

// Function for adding a greeting to a message.
function addGreeting(message) {

    // Add "Hello! The message is: " to the string.
    let greeting = "Hello! The message is: "

    return greeting + message;
}

let unitCode = "IFQ714";
 
// Send a message informing someone of this unit's code.
newMessage = addGreeting(unitCode);
 

// Show the message in the console.
console.log(newMessage);

// EXERCISE 2


// Function for multiplying numbers by 10 and showing the result.
function multiplyByTen(...args) {
 

    for (let i = 0; i < args.length; i++) {
 

        // Store the current number temporarily.
        let currentNumber = args[i];
        //console.log('current number is: ' + currentNumber);
 

        // Multiply the current number by ten.
        currentNumber *= 10;
       

        // Show the number in the console.
        console.log(`Number ${args[i]} times 10 = ${currentNumber}`);
    }
}
 

// Multiply some numbers by 10.
multiplyByTen(5, 10, 15, 20);


// Function for checking if two values are the same.
function checkValuesEqual(first, second) {
 

    // Variable for storing Boolean.
    let valuesEqual;
 

    // Check if the values are the same, including their type.

    valuesEqual = first === second;
 

    // Show the result in the console.
    if (valuesEqual) {
        console.log("The values were equal.");
    } else {
        console.log("The values were not equal.");
    }
}
 

// See if these pairs of values are the same.
checkValuesEqual("hello", "goodbye");
checkValuesEqual("hello", "hello");
checkValuesEqual(5, 5);
checkValuesEqual(5, "5");
 
// Function for counting how many 1s are in an array.
function countOnes (...values) {
 

    // Variable for the number of ones.
    numOnes = 0;
 

    for (let i = 0; i < values.length; i++) {
 

        // Check if the current value is 1.
        let isOne = (values[i] === 1);
 

        // Add one to the count of ones.
        if (isOne === true) {
            numOnes += 1
        };
        //console.log(`Total ones: ${numOnes}`);
    }
    console.log(`Total ones: ${numOnes}`);
}
countOnes(1, 2, 3, 13, 1, 15, 'one', 'two', 1);

// EXERCISE 4

// Program to compute Fibonacci sequence to N terms.
 

// Three constant variables for example uses of the function.
 

// A function to compute the Fibonacci sequence.
// Parameter indicates how many terms to progress to.
function fibonacci (terms = 0) {
    // Variables for the two terms to add together, starting with 0 and 1.
    
    let num1 = 0;
    let num2 = 1;
    

    // Variable for storing the next term.
    let nextNum
    

    // Loop through until we have computed the specified number of terms.
    for (let i = 1; i <= terms; i++) {
        
        // Print the current value of the first term to the console.
        console.log(num1);           

        // Compute the next term and store it.
        nextNum = num1 + num2;
    
 
        // Set the values of the values to add together for the next term.
        num1 = num2;
        num2 = nextNum;
    }
}

// Call the function above with each of the constant variables.
fibonacci(terms = 9);