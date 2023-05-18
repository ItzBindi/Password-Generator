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
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialOptions = ["!", "@", "#", "$","%","&"]
var useroptions = []

function generatePassword() {
  var passwordLength = prompt("Pick a length for your password bewteen 8 to 128 characters.")
  
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Make sure your length is in between 8 and 128 characters! ")
    generatePassword();
  }

var lowerCase = confirm("Do you want lowercase characters in your password?")
var upperCase = confirm("Do you want uppercase characters in your password?")
var number = confirm("Do you want numbers in your password?")
var special = confirm("Do you want special characters in your password?")
if (lowerCase !== true && upperCase !== true && number !== true && special !== true ) {
  alert("Make sure to select atleast one character type!")
  generatePassword();
}else {
  if (lowerCase) {
useroptions = useroptions.concat(lowerCaseOptions);
}
  if (upperCase) {
  useroptions = useroptions.concat(upperCaseOptions);
  }
  if (number) {
    useroptions = useroptions.concat(numberOptions);
  }
  if (special) {
    useroptions = useroptions.concat(specialOptions);
  }
}
console.log(useroptions);
 

var newPassword = ""

for(let i = 0; i < passwordLength; i++) {
  // passwordLength[i] + generateBtn;
  var randLet = Math.floor(Math.random() *useroptions.length);
  console.log(randLet);
  var pickletter = useroptions[randLet]
  console.log("machine picks" + " " + pickletter);
  newPassword += pickletter




}
console.log(newPassword);
return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

