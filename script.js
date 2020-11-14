// Assignment code here
// Series of prompts for password criteria slect options include
// choose length of password. selct a number 8-128. Make reselect if anything that is not 8-128 is selected
// Arrays
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=','?', '/', '<', '>'];
var numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// length function
var passLength = function () {
    var promptLength = window.prompt('How long would you like your password to be? Please enter a number from 8 to 128.');
    
    //Users response invalid
    if (promptLength <=7 || promptLength >=129) {
        window.alert('Please select a valid number.')
        return passLength();
    }


};

// password function
var generatePassword = function () {
return passLength();
};
// length function
var passLength = function () {
    var promptLength = window.prompt('How long would you like your password to be? Please enter a number from 8 to 128.');
    
    //Users response invalid
    if (promptLength <=7 || promptLength >=129) {
        window.alert('Please select a valid number.')
        return passLength();
    }


};

/*
length 8-128
special characters : lowercase
uppercase
numeric
and/or special characters
generate password matching criteria at least one of each
diplayed password on page or in alert
*/

// password object
//var passwordInfo = {
 //   length: promptLength();
//}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
