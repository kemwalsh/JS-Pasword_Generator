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

  // If didnt select any options
  if (!wantLowercase && !wantUppercase && !wantNumeric && !wantSpecial) {
    picked = alert("Please select at least one character type.");
  }

  // If selected four options
  else if (wantLowercase && wantUppercase && wantNumeric && wantSpecial) {
    picked = lowercaseCharacters.concat(uppercaseCharacters, numericCharacters, specialCharacters);
  }

  // If selected three options
  else if (wantLowercase && wantUppercase && wantNumeric) {
    picked = lowercaseCharacters.concat(uppercaseCharacters, numericCharacters);
  }
  else if (wantLowercase && wantUppercase && wantSpecial) {
    picked = lowercaseCharacters.concat(uppercaseCharacters, specialCharacters);
  }
  else if (wantLowercase && wantNumeric && wantSpecial) {
    picked = lowercaseCharacters.concat(numericCharacters, specialCharacters);
  }
  else if (wantUppercase && wantNumeric && wantSpecial) {
    picked = uppercaseCharacters.concat(numericCharacters, specialCharacters);
  }

  // If select two options
  else if (wantLowercase && wantUppercase) {
    picked = lowercaseCharacters.concat(uppercaseCharacters);
  }
  else if (wantLowercase && wantNumeric) {
    picked = lowercaseCharacters.concat(numericCharacters);
  }
  else if (wantLowercase && wantSpecial) {
    picked = lowercaseCharacters.concat(specialCharacters);
  }
  else if (wantUppercase && wantNumeric) {
    picked = uppercaseCharacters.concat(numericCharacters);
  }
  else if (wantUppercase && wantSpecial) {
    picked = uppercaseCharacters.concat(specialCharacters);
  }
  else if (wantNumeric && wantSpecial) {
    picked = numericCharacters.concat(specialCharacters);
  }

  // If selected one option

  else if (wantLowercase) {
    picked = lowercaseCharacters;
  }
  else if (wantUppercase) {
    picked = uppercaseCharacters;
  }
  else if (wantNumeric) {
    picked = numericCharacters;
  }
  else if (wantSpecial) {
    picked = specialCharacters;
  }

  // This is a loop for where the characters are chosen.

  for (let i = 0; i < selected; i++) {
    let selectedCharacters = picked[Math.floor(Math.random() * picked.length)];
    tempPassword.push(selectedCharacters);
  }
  var password = tempPassword.join("");
  return password;
};

function writePassword() {
  password = generatePassword();
  document.getElementById("password").placeholder = password;
}

// Event listener to generate button

generateBtn.addEventListener("click", writePassword);






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
