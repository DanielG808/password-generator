// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//DATA
var charAmount = prompt("Select a character count between 8 and 128: ");
var includeUppercase = confirm("Do you want to include uppercase characters?");
var includeLowercase = confirm("Do you want to include lowercase characters?");
var includeNum = confirm("Do you want to include number characters?");
var includeSymbol = confirm("Do you want to include symbol characters?");

var uppercaseCharCodes = pushToArray(65, 90);
var lowercaseCharCodes = pushToArray(97, 122);
var numCharCodes = pushToArray(48, 57);
var symbolCharCodes = pushToArray(33,47).concat(pushToArray(58,64));

var uppercaseLetters = uppercaseCharCodes.map(code => String.fromCharCode(code));
var lowercaseLetters = lowercaseCharCodes.map(code => String.fromCharCode(code));
var numbers = numCharCodes.map(code => String.fromCharCode(code));
var symbols = symbolCharCodes.map(code => String.fromCharCode(code));


console.log(uppercaseLetters);
console.log(lowercaseLetters);
console.log(numbers);
console.log(symbols);

console.log(charAmount)
console.log(includeUppercase)
console.log(includeLowercase)
console.log(includeNum)
console.log(includeSymbol)


// FUNCTIONS
function pushToArray(lowNum, highNum) {
  var array = []
  for (var i = lowNum; i <= highNum; i++) {
    array.push(i)
  }
  return array
};


function generatePassword() {
  passwordCharacters = [];

  if (includeUppercase) {
    passwordCharacters = uppercaseLetters.concat()
  };
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
// EVENT LISTENER
generateBtn.addEventListener("click", writePassword);
