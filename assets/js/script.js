// Write password to the #password input
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//character criteria
// b. lowercase, uppercase, numeric, special characters
var passwordCriteria = {
  pwdLength: 0,
  upper: ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numb: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  sym: ["!", "?", "%", "*", "+", "&"],
}










function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






//function to generate password
function generatePassword() {
  var generatedPwd = " ";
  // Prompts/inputs
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var symbols;
  //characters
  var passwordLength = 0;
  passwordCriteria.passwordLength = 0;
  generatedPwd = " ";

  // 1. Prompt user for the password crtiteria
  // a. password length 8 < 128 characters
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be?");
    //if user cancels
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      //makes sure user enters a number
      if(!isFinite(passwordLength)) {
        alert ("Please enter a number");
        return "Your secure password";
      }
    else {
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Please select a password between 8 - 128 characters");
        return "Your secure password";
      }
      else {
        //call internal function to call prompts
        displayPrompts();
        
        while (passwordCriteria.pwdLength < passwordLength) {
          //if statement to make sure the user selects at least one of the criteria  
          if (lowerCase === false && upperCase === false && numbers === false && symbols === false) {
            alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
            
            // 2. Validate the users input
            displayPrompts();
          }
          else {
            
            if (lowerCase === true && passwordCriteria.pwdLength < passwordLength) {
              var lc = passwordCriteria.lower[Math.floor(Math.random() * 26)]
              generatedPwd = generatedPwd + lc;
              passwordCriteria.pwdLength++;
              
            }

           
                   
            if (specialChars === true && passwordCriteria.pwdLength < passwordLength) {
              // 3. Generate the password based on the users criteria
              var sc = passwordCriteria.sym[Math.floor(Math.random() * 6)]
              generatedPwd = generatedPwd + sc;
              passwordCriteria.pwdLength++;
              
            }

           
            //update passwordLength by 1
            if (upperCase === true && passwordCriteria.pwdLength < passwordLength) {
              var uc = passwordCriteria.upper[Math.floor(Math.random() * 26)]
              generatedPwd = generatedPwd + uc;
              passwordCriteria.pwdLength++;
              
            }

            
            if (numbers === true && passwordCriteria.pwdLength < passwordLength) {
              var num = passwordCriteria.numb[Math.floor(Math.random() * 10)]
              generatedPwd = generatedPwd + num;
              passwordCriteria.pwdLength++;
              
            }
          }
        }
      }
    }
  }

  //return the generated password back to the calling function
  // 4. Display the generated password
  return generatedPwd;

  function displayPrompts() {
    upperCase = confirm("Would you like to include uppercase charaters?");
    lowerCase = confirm("Would you like to include lowercase charaters?");
    numericChars = confirm("Would you like to include numerical charaters?");
    specialChars = confirm("Would you like to include special charaters?");
    }
  }
}
  
  


 


