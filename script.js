var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var selected;
  var picked;
  var wantLowercase;
  var wantUppercase;
  var wantSpecial;
  var wantNumeric;
  var tempPassword = [];



  // get input and validate
  selected = parseInt(prompt("How many characters do you want in your password? Choose between 8-128 characters?"));
  if (!selected) {
    alert("You must enter a value");
  } else if (selected < 8 || selected > 128) {
    alert("You must enter a value between 8-128.");
  } else {
    wantLowercase = confirm("Do you want lowercase characters?");
    wantUppercase = confirm("Do you want uppercase characters?");
    wantSpecial = confirm("Do you want special characters?");
    wantNumeric = confirm("Do you want numbers?");
  };






// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
