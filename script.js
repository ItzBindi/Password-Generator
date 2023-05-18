// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



function generatePassword() {
  var passwordLength = prompt("Pick a length for your password bewteen 8 to 128 characters.")
  
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Make sure your length is in between 8 and 128 characters! ")
    generatePassword();
  }

var lowerCase = confirm("Do you want lowercase characters in your password?")
var upperCase = confirm("Do you want uppercase characters in your password?")

if (lowerCase !== true && upperCase !== true) {
  alert("Make sure to select atleast one character type!")
  generatePassword();
}else{
  var randNum = Math.floor(Math.random()* 26);
  var picklowercase = lowerCaseOptions[randNum]
  console.log("machine picks" + " " + picklowercase);
  var pickuppercase = upperCaseOptions[randNum]
  console.log("machine picks" + " " + pickuppercase);

}





}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();