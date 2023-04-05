// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Ask the user for password length
  //(Minimum of 8 characters, maximum of 128)
  let passwordLenght = parseInt(prompt("How long should the password be?"));
  // Validate lenght
  if (passwordLenght < 8 || passwordLenght > 128) {
    alert(
      "Oops, invalid password lenght!\n Please choose a password greater than 8 and less than 128 characters. "
    );
    return "";
  }

  //Ask the user for which characters to include
  var includeLowerCase = confirm("Include lowercase letters in password?");
  var includeUpperCase = confirm("Include uppercase letters in password?");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm(
    "Include special characters in password?"
  );
  //Validate types of characters
  if (
    !includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includeSpecialCharacters
  ) {
    alert(
      "Oops, invalid character types! \nPlease include at least one type of character."
    );
    return "";
  }
  //Generate random password
  let passwordCharacters = [];
  const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const numbers = "0123456789";
  const letters = "abcdefghijklmnopqrstuvwxyz";
  // Convert to uppercase
  const uppercase = letters.toUpperCase();

  //TODO handle other character types

  if (includeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
  }

  if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(numbers.split(""));
  }
  if (includeLowerCase) {
    passwordCharacters = passwordCharacters.concat(letters.split(""));
  }
  if (includeUpperCase) {
    passwordCharacters = passwordCharacters.concat(uppercase.split(""));
  }

  let results = "";
  for (var i = 0; i < passwordLenght; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    let randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter;
  }

  //Return generated password
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
