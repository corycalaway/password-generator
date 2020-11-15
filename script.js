// Assignment code here
// Series of prompts for password criteria slect options include
// choose length of password. selct a number 8-128. Make reselect if anything that is not 8-128 is selected
// Arrays
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "?",
  "/",
  "<",
  ">",
];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// length function
var generatePassword = function () {
  var promptLength = window.prompt(
    "How long would you like your password to be? Please enter a number from 8 to 128."
  );

  //Users response invalid
  if (promptLength <= 7 || promptLength >= 129) {
    window.alert("Please select a valid number.");
    return generatePassword();
  } else {
    passwordInfo.length = promptLength;
  }
  console.log(promptLength);

  // lowercase confirm
  var lowerCaseConfirm = window.confirm(
    "Would you like to include lowercase characters in your password?"
  );

  console.log(lowerCaseConfirm);
  if (lowerCaseConfirm === true) {
    passwordInfo.lower = true;
    upperCaseConfirm();
  } else {
    passwordInfo.lower = false;
    upperCaseConfirm();
  }
  console.log(passwordInfo);
};

// uppercase confirm
var upperCaseConfirm = function () {
  var upperCaseClear = window.confirm(
    "Would you like to include uppercase characters in your password?"
  );

  if (upperCaseClear === true) {
    passwordInfo.upper = true;
    specialCharConfirm();
  } else {
    passwordInfo.upper = false;
    specialCharConfirm();
  }
  console.log(passwordInfo);
};

// special character
var specialCharConfirm = function () {
  var specialCharClear = window.confirm(
    "Would you like to include special characters in your password?"
  );

  if (specialCharClear === true) {
    passwordInfo.special = true;
    numericConfirm();
  } else {
    passwordInfo.special = false;
    numericConfirm();
  }
  console.log(passwordInfo);
};

// numbers

var numericConfirm = function () {
 
  var numericClear = window.confirm(
    "Would you like to include numbers in your password?"
  );
  if (numericClear === true) {
    passwordInfo.numeric = true;
    completePassword();
  } else {
    passwordInfo.numeric = false;
    completePassword();
  }
  console.log(passwordInfo);
};

// option of characters confirm

// Prompt asking to add lowerCaseArray

// option of characters confirm

//var charOptions = function () {
//  passwordInfo.lowerCaseSelect();
//};
// Prompt asking to add upperCaseArray

// Prompt asking to add specialCharArray
//var lowerchar = confirm
//if(lowerchar)
//Result.push(lowercasearr)
// Prompt asking to add numericArray

// password function

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
var passwordInfo = {
  length: 0,
  lower: 0,
  upper: 0,
  special: 0,
  numeric: 0,
};
var finalPassword = []
// finalize password

var completePassword = function () {
    // add lowerCaseArray
    if (passwordInfo.lower === true) {
    finalPassword.push(lowerCaseArray[Math.floor(lowerCaseArray.length * Math.random())]);
    // add upperCaseArray
    if (passwordInfo.upper === true) {
    finalPassword.push(upperCaseArray[Math.floor(upperCaseArray.length * Math.random())]);
    // add special characters
    if (passwordInfo.special === true) {
    finalPassword.push(specialCharArray[Math.floor(specialCharArray.length * Math.random())]);
    // add numbers
    if (passwordInfo.numeric === true) {
    finalPassword.push(numericArray[Math.floor(numericArray.length * Math.random())]);
    }}}
} else {

window.alert("There are no possible passwords given your selections, please select length of password and at least one password criteria.");
return generatePassword();

}
};
console.log(passwordInfo);
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
