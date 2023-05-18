// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//DATA
uppercaseCharCodes = pushToArray(65, 90)
lowercaseCharCodes = pushToArray(97, 122)
numCharCodes = pushToArray(48, 57)
symbolCharCodes = pushToArray(33,47).concat(pushToArray(58,64))
// FUNCTIONS
function generatePassword() {
  String.fromCharCode()
}

function pushToArray(lowNum, highNum) {
  var array = []
  for (var i = lowNum; i <= highNum; i++) {
    array.push(i)
  }
  return array
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

console.log(uppercaseCharCodes)

// Add event listener to generate button
// EVENT LISTENER
generateBtn.addEventListener("click", writePassword);
