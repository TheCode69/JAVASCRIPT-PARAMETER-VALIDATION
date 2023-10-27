# JAVASCRIPT-PARAMETER-VALIDATION

1. function processInput(inputString, inputNumber) {
   This line defines a JavaScript function named processInput that takes two parameters: inputString (a string) and inputNumber (a number).

2. while (typeof inputString !== 'string' || typeof inputNumber !== 'number' || isNaN(inputNumber)) {
   This line starts a while loop. The loop will continue executing as long as any of the following conditions are true:

3. inputString is not a string (typeof inputString !== 'string')
   inputNumber is not a number (typeof inputNumber !== 'number')
   inputNumber is NaN (Not a Number) (isNaN(inputNumber))
   console.log('Error: Invalid input.');
   If any of the conditions in the while loop are true, this line prints an error message to the console indicating that the input is invalid.
   
4. inputString = prompt('Enter a string:');
   Inside the loop, this line prompts the user to enter a string and assigns the input value to the inputString variable.

5. inputNumber = parseFloat(prompt('Enter a number:'));}
  This line prompts the user to enter a number, converts the input to a floating-point number using parseFloat(), and assigns the result to the inputNumber variable.
  The closing brace of the while loop indicates the end of the loop block. If any of the conditions in the while statement are true, the loop will repeat, allowing the user to enter new values until both
  inputString and inputNumber are valid.

6. return String: ${inputString}, Number: ${inputNumber};
   After the while loop exits (when both inputString and inputNumber are valid), this line constructs a string using a template literal. It includes the valid inputString and inputNumber values. This string is 
   returned by the processInput function.
   
7. let userInputString = prompt('Enter a string:');
   This line prompts the user to enter a string and stores the input in the userInputString variable.
   
8. let userInputNumber = parseFloat(prompt('Enter a number:'));
   This line prompts the user to enter a number, parses the input as a floating-point number, and stores the result in the userInputNumber variable.
   
9. const result = processInput(userInputString, userInputNumber);
   This line calls the processInput function with the user-provided inputString and inputNumber, storing the returned result in the result variable.
   
10. console.log(result);
    Finally, this line prints the result (the formatted string containing the valid input values) to the console.
