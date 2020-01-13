var generateBtn = document.querySelector("#generate");


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {

}

generateBtn.addEventListener("click", writePassword);

// var charLength = prompt("Choose length of password, must be atleast 8 characters");
// var specialCharQuestion = confirm("Does it need special characters?");
// var numericCharQuestion = confirm("Does it require numeric characters?");
// var lowercaseQuestion = confirm("Does it require lowercase letters?");
// var uppercaseQuestion = confirm("Does it require uppercase letters?");

var specialCharChoice = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var numberChoice = ["0123456789"];
var letterChoice = ["abcdefghijklmnopqrstuvwxyz"];

function randomChar() {
    specialCharChoice[Math.floor(Math.random() * specialCharChoice.lenth)]; 
    
}
console.log(randomChar())

    



