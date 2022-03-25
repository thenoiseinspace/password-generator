// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*function writePassword(yesLower, yesUpper, yesNumber, yesSpecial, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  resultEl.innerText = writePassword(
    yesLower, yesUpper, yesNumber, yesSpecial, length
  )
}*/

//Making all the starting variables
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var lowerCaseEl = document.getElementById("lowercase");
var upperCaseEl = document.getElementById("uppercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var createEl = document.getElementById("create");
//var clipboardEl = document.getElementById("clipboard")

var randomFunc ={
    lower:makeLowerCase,
    upper:makeUpperCase,
    number:makeNumber,
    special:makeSpecials,
}

//Making the event listener for the button but I don't really know where this should go
generateEl.addEventListener("click", () => { //Arrow function?
    var length = +lengthEl.value  //take out plus and parse int
    var yesLower = lowerCaseEl.checked; //checkboxes
    var yesUpper = upperCaseEl.checked;
    var yesNumber = numbersEl.checked;
    var yesSpecial = symbolsEl.checked;

    writePassword(yesLower, yesUpper, yesNumber, yesSpecial, length) {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      
        resultEl.innerText = writePassword(
          yesLower, yesUpper, yesNumber, yesSpecial, length
        )
      }

})

//Need four functions, one for each of the requirements

//Prompt for length requirement
generateEl.addEventListener("click", () => { //Arrow function?
    var length = +lengthEl.value  //take out plus and parse int
    console.log(length); 

//Prompt for uppercase
function makeUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

//Prompt for lower case
function makeLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

//Prompt for numbers
function makeNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

//Prompt for special characters
function makeSpecials(){
    let specials = "!@#$%^&*(){}[]+<>/,.";
    return specials[Math.floor(Math.random()*symbols.length)]; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







/*# 03 JavaScript: Password Generator

## Your Task

This week’s homework requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

This homework is graded based on the following criteria: 

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

### Repository Quality: 13%

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.