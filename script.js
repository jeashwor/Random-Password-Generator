// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbols: "<>`~!@#$%^&*()-_=+[]{}|\"\\\r\n"
}
userPassword = "";


function generatePassword(lower, upper, number, symbol, length) {
  var userPasswordCharacters = "";
  var length = prompt("Enter the desired number of password characters.  (Must be a number between 8 and 128)");
  var useLower = confirm("Do you want to include lower case letters?");
  var useUpper = confirm("Do you want to include Upper case letters?");
  var useNumber = confirm("Do you want to include numbers?");
  var useSymbol = confirm("Do you want to include Special Characters?");
  
  if (useNumber === true) {
    userPasswordCharacters = userPasswordCharacters + characters.number;
  }
  if (useUpper === true) {
    userPasswordCharacters = userPasswordCharacters + characters.upperCase;
  }
  if (useLower === true) {
    userPasswordCharacters = userPasswordCharacters + characters.lowerCase;
  }
  if (useSymbol === true) {
    userPasswordCharacters = userPasswordCharacters + characters.symbols;
  }
  if (userPasswordCharacters.length === 0) {
    alert("Must select at least one character type!");
  }
  var userPassword = "";
  for (var i = 1; i <= length; i++) {
    userPassword = userPassword + userPasswordCharacters.charAt(Math.floor(Math.random() * Math.floor(userPasswordCharacters.length - 1)));
  }
  return userPassword;
  console.log(userPassword);
}



// Code bits from tutorials


// const randomFunc = {
//   lower: getRndLower,
//   upper: getRndUpper,
//   number: getRndNumber,
//   symbol: getRndSymbol
// };


// function getRndLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRndUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRndNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRndSymbol() {
//   const symbols = " !#$%&()*+,-./:;<=>?@[\]^_`{|}~"
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }
// console.log(getRndSymbol());