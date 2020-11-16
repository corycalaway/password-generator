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

// finalize password
var finalPassword = [];
// finalize password
// complete array
var fullArray = [];
// reduce pass length
var passReduce= 0;

var generatePassword = function () {
    // reset final password
    finalPassword = [];
    // reset array
    fullArray = [];
    // reset pass reduce
    passReduce = 0;

  var promptLength = window.prompt(
    "How long would you like your password to be? Please enter a number from 8 to 128."
  );
    
  //Users response invalid
  if (promptLength >= 7 && promptLength <= 128) {
    passwordInfo.passLength = promptLength;
  } else {
      window.alert("Please select a valid number.");
  return generatePassword();
  };

  // lowercase confirm
  var lowerCaseConfirm = window.confirm(
    "Would you like to include lowercase characters in your password?"
  );

  console.log(lowerCaseConfirm);
  if (lowerCaseConfirm === true) {
    passwordInfo.passLower = true;
    upperCaseConfirm();
  } else {
    passwordInfo.passLower = false;
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
    passwordInfo.passUpper = true;
    specialCharConfirm();
  } else {
    passwordInfo.passUpper = false;
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
    passwordInfo.passSpecial = true;
    numericConfirm();
  } else {
    passwordInfo.passSpecial = false;
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
    passwordInfo.passNumeric = true;
    completePassword();
  } else {
    passwordInfo.passNumeric = false;
    completePassword();
  }
  console.log(passwordInfo);
};

// password object
var passwordInfo = {
  passLength: 0,
  passLower: 0,
  passUpper: 0,
  passSpecial: 0,
  passNumeric: 0,
};
// pushes at least one of each selected character to array
var completePassword = function () {
  // add lowerCaseArray
  if (passwordInfo.passLower === true) {
    finalPassword.push(
      lowerCaseArray[Math.floor(lowerCaseArray.length * Math.random())]);
      Array.prototype.push.apply(fullArray, lowerCaseArray);
      passReduce += 1;
  }

  // add upperCaseArray
  if (passwordInfo.passUpper === true) {
    finalPassword.push(
      upperCaseArray[Math.floor(upperCaseArray.length * Math.random())]);
      Array.prototype.push.apply(fullArray, upperCaseArray);
      passReduce += 1;
  }

  // add special characters
  if (passwordInfo.passSpecial === true) {
    finalPassword.push(
      specialCharArray[Math.floor(specialCharArray.length * Math.random())]);
      Array.prototype.push.apply(fullArray, specialCharArray);
      passReduce += 1;
  }
  // add numbers
  if (passwordInfo.passNumeric === true) {
    finalPassword.push(
      numericArray[Math.floor(numericArray.length * Math.random())]);
      Array.prototype.push.apply(fullArray, numericArray);
      passReduce += 1;
  }
  fullLengthPass();
};
// when final password is less than passwordinfo length run through each array and sometimes add a char
var fullLengthPass = function () {
  for (var i = 0; i < passwordInfo.passLength - passReduce; i++) {
    finalPassword.push(fullArray[Math.floor(fullArray.length * Math.random())]);
  }
  };
 
console.log(passwordInfo);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  // joins array to display final password
  passwordText.value = finalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);