function processInput(inputString, inputNumber) {
    // Check if inputString is a string and inputNumber is a number
    while (typeof inputString !== 'string' || typeof inputNumber !== 'number' || isNaN(inputNumber)) {
        console.log('Error: Invalid input.');
        inputString = prompt('Enter a string:');
        inputNumber = parseFloat(prompt('Enter a number:'));
    }

    // If both parameters are valid, proceed with the function logic
    // For example, you can perform some operations using inputString and inputNumber
    return `String: ${inputString}, Number: ${inputNumber}`;
}

// Example usage:
let userInputString = prompt('Enter a string:');
let userInputNumber = parseFloat(prompt('Enter a number:'));

const result = processInput(userInputString, userInputNumber);
console.log(result);
