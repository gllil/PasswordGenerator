// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {


  var specialCharacters =  ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];  
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  

  var lengthQuestion = prompt("How many characters will your password be?");
  var specialCharQues = confirm("Does your password require symbols?");
  var numbersQues = confirm("Does your password require numbers?");
  var upperQues = confirm("Does your password require upper case letters?");
  var lowerQues = confirm("Would you like to include lower case letters?");

  var length = parseInt(lengthQuestion);

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var possibleChar = [];

  if (specialCharQues) {
    possibleChar = possibleChar.concat(specialCharacters);
  }

  if (numbersQues) {
    possibleChar = possibleChar.concat(numbers);
  }

  if (upperQues) {
    possibleChar = possibleChar.concat(upperCaseChar);
  }

  if (lowerQues) {
    possibleChar = possibleChar.concat(lowerCaseChar)
  }
 
  var newPassword = "";

  for (var i = 0; i < length; i++){
    var randomChar = possibleChar[Math.floor(Math.random() * possibleChar.length)];

    newPassword += randomChar; 
    
  }


  
  passwordText.value = newPassword;

  function copyToClipboard() {
    // BONUS 

    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard!");
  }
  copyBtn.removeAttribute(passwordText);
  copyBtn.focus();
 
 
  copyBtn.addEventListener("click", copyToClipboard);

}








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



    

// BONUS EVENT LISTENER