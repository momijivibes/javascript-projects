const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modifiedStr = str.slice(3) + str.slice(0,3);
console.log(`Original string: ${str}`)
console.log(`Modified string: ${modifiedStr}`);

//Use a template literal to print the original and modified string in a descriptive phrase.
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strToModify = input.question("Enter a string: ");

let numOfLettersToSwap = Number(input.question("How many letters do you want to swap? "));


let modifiedStr2 = strToModify.slice(numOfLettersToSwap) + strToModify.slice(0, numOfLettersToSwap);
console.log(`Original string: ${strToModify}`);
console.log(`Modified string: ${modifiedStr2}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.


if (numOfLettersToSwap > strToModify.length) {
    let modifiedStr2 = strToModify.slice(3) + strToModify.slice(0, 3);
    console.log(`Original string: ${strToModify}`);
    console.log("Oops! ")
}