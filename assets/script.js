//setting up variables
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '?', '/', ';', ':', '<', '>', '[', ']', '{', '}']

var totalCharacterBank = [];
var resultPassword = "";

//Setting up the way the page looks when it loads
// window.onload = alert("Create a secure password! Click the button to begin, then select your parameters to generate your new password.");

//Then the person begins
function beginPasswordCreation(){
  var password = makePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 

}

function makePassword(){
  alert("Create a secure password! Click the button to begin, then select your parameters to generate your new password.");
  totalCharacterBank = [];
  resultPassword = "";  
//}

//Asking user to choose parameters--everything they choose is added to the main character bank to draw from later

var passwordLength = window.prompt("How many characters should the password include? Select a number between 8 and 128 characters.")

if(passwordLength <8 || passwordLength > 128){
  alert("Select a number between 8 and 128 characters.");
}
  else{
    if(confirm("Should the password contain lower case letters?")){
      Array.prototype.push.apply(totalCharacterBank, [lowercaseAlphabet])
      console.log("lower case added" + " " + totalCharacterBank)
      
  }
  if(confirm("Should the password contain upper case letters?")){
      Array.prototype.push.apply(totalCharacterBank, [uppercaseAlphabet])
      console.log("upper case added" + " " + totalCharacterBank)
  }
  if(confirm("Should the password contain special characters?")){
      Array.prototype.push.apply(totalCharacterBank, [symbols])
      console.log("special added" + " " + totalCharacterBank)
  }
  if(confirm("Should the password contain numbers?")){
      Array.prototype.push.apply(totalCharacterBank, [numbers])
      console.log("numbers added" + " " + totalCharacterBank)
  }
  console.log("bank at end of function" + " " + totalCharacterBank)
  }

  //Randomizing
    // for(var i=0; i<passwordLength; i++){
    //   var random= Math.floor(Math.random()*totalCharacterBank.length);
    //   resultPassword = totalCharacterBank[random]; 
    // }
  shuffle(totalCharacterBank)
    console.log(totalCharacterBank)

  console.log(resultPassword)
    //Result
    document.getElementById("password").innerHTML = resultPassword; 

//Making it work on click
generateBtn.addEventListener("click", beginPasswordCreation);
}
//Calliing the function
// makePassword();
generateBtn.addEventListener("click", makePassword);


