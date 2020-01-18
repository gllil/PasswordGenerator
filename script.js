var generateBtn = document.querySelector("#generate");


var password = generatePassword();
var passwordText = document.querySelector("#password");

var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}


generateBtn.addEventListener("click", function() {
    var lengthQuestion = prompt("Choose length of password, must be atleast 8 characters");
    var symbolsQuestion = confirm("Does it require special characters/symbols?");
    var numQuestion = confirm("Does it require numeric characters?");
    var lowerQuestion = confirm("Does it require lowercase letters?");
    var upperQuestion = confirm("Does it require uppercase letters?");

    var length = +lengthQuestion.value;
    var hasSymbol = symbolsQuestion;
    var hasNumber = numQuestion;
    var hasLower = lowerQuestion;
    var hasUpper = upperQuestion;

    passwordText.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    passwordText.value = password;
});

function generatePassword(lower, upper, number, symbol, length) {
    var generatedPassword = '';
    var typesCount = lower + upper + number + symbol;
    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(var i = 0; i < length; i+=typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    var finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}


    
    
    

    function getRandomLower(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    
    function getRandomUpper(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    
    function getRandomNumber(){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    
    function getRandomSymbol(){
         var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
         return symbols[Math.floor(Math.random() * symbols.length)];
    }
    
    // var randomFunc = {
    //     lower: getRandomLower,
    //     upper: getRandomUpper,
    //     number: getRandomNumber,
    //     symbol: getRandomSymbol
    // }

    // function generatePassword(lower, upper, number, symbol) {
    //     var generatedPassword = "";
    //     var typesCount = lower + upper + number + symbol;
    //     var typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    //     (
    //         item => Object.values(item)[0]
    //     );
    
    //     if(typesCount === 0) {
    //       return '';  
    //     }
    
    //     for(var i = 0; i < length; i += typesCount) {
    //         typesArr.forEach(type => {
    //             var funcName = Object.keys(type)[0];
    
    //             generatedPassword += randomFunc[funcName]();
    //         })
    //     }
    // }
    
        
    

    

    // copyBtn.removeAttribute("disabled");
    // copyBtn.focus();
    




function copyToClipboard() {

}

;

