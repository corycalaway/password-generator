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


var generatePassword = function () {
    // reset final password
    finalPassword = [];
    
  var promptLength = window.prompt(
    "How long would you like your password to be? Please enter a number from 8 to 128."
  );
    
  //Users response invalid
  if (promptLength >= 7 && promptLength <= 129) {
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
      lowerCaseArray[Math.floor(lowerCaseArray.length * Math.random())]
    );
  }

  // add upperCaseArray
  if (passwordInfo.passUpper === true) {
    finalPassword.push(
      upperCaseArray[Math.floor(upperCaseArray.length * Math.random())]
    );
  }

  // add special characters
  if (passwordInfo.passSpecial === true) {
    finalPassword.push(
      specialCharArray[Math.floor(specialCharArray.length * Math.random())]
    );
  }
  // add numbers
  if (passwordInfo.passNumeric === true) {
    finalPassword.push(
      numericArray[Math.floor(numericArray.length * Math.random())]
    );
  }
  fullLengthPass();
};
// when final password is less than passwordinfo length run through each array and sometimes add a char
var fullLengthPass = function () {
  var randomChance = true;
  if (Math.random() > 0.5) {
    randomChance = false;
  }

  while (finalPassword.length <= passwordInfo.passLength) {
    if (passwordInfo.passLower === true && randomChance === true) {
      finalPassword.push(
        lowerCaseArray[Math.floor(lowerCaseArray.length * Math.random())]
      );
    }
    console.log(randomChance);
    // add upperCaseArray
    randomChance = true;
    if (Math.random() > 0.5) {
      randomeChance = false;
    }
    if (passwordInfo.passUpper === true && randomChance === true) {
      finalPassword.push(
        upperCaseArray[Math.floor(upperCaseArray.length * Math.random())]
      );
    }
    randomChance = true;
    if (Math.random() > 0.5) {
      randomChance = false;
    }
    console.log(randomChance);
    // add special characters
    if (passwordInfo.passSpecial === true && randomChance === true) {
      finalPassword.push(
        specialCharArray[Math.floor(specialCharArray.length * Math.random())]
      );
    }
    randomChance = true;
    if (Math.random() > 0.5) {
      randomChance = false;
    }
    console.log(randomChance);
    // add numbers
    if (passwordInfo.passNumeric === true && randomChance === true) {
      finalPassword.push(
        numericArray[Math.floor(numericArray.length * Math.random())]
      );
    }
  }
};
console.log(passwordInfo);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // joins array to display final password
  passwordText.value = finalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
