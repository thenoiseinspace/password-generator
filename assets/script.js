//setting up variables
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '?', '/', ';', ':', '<', '>', '[', ']', '{', '}']

var totalCharacterBank = [];

function makePassword(){
  alert("Create a secure password! Click the button to begin, then select your parameters to generate your new password.");
  totalCharacterBank = [];
  resultPassword = [];  


//Asking user to choose parameters--everything they choose is added to the main character bank to draw from later
var passwordLength = Number(window.prompt("How many characters should the password include? Select a number between 8 and 128 characters."))
  console.log(passwordLength)

if(passwordLength <8 || passwordLength > 128){
  alert("Select a number between 8 and 128 characters.");
} else{
    if(confirm("Should the password contain lower case letters?")){
      totalCharacterBank = totalCharacterBank.concat(lowercaseAlphabet)
      console.log("lower case added" + " " + totalCharacterBank)   
  }
  if(confirm("Should the password contain upper case letters?")){
      totalCharacterBank = totalCharacterBank.concat(uppercaseAlphabet);
      console.log("upper case added" + " " + totalCharacterBank)
  }
  if(confirm("Should the password contain special characters?")){
      totalCharacterBank = totalCharacterBank.concat(symbols);
      console.log("special added" + " " + totalCharacterBank)
  }
  if(confirm("Should the password contain numbers?")){
      totalCharacterBank = totalCharacterBank.concat(numbers);
      console.log("numbers added" + " " + totalCharacterBank)
  }
  console.log("bank at end of function" + " " + totalCharacterBank)
  }

  var resultPassword = [];

  //Shuffling contents of totalCharacaterBank array
    for(var i=0; i<passwordLength; i++){
      var randomizedBank= selectRandomElement(totalCharacterBank)
      resultPassword.push(randomizedBank)
    }

    // return resultPassword.join(''); 
    function selectRandomElement(arr){
      var randomPlaceInArray = Math.floor(Math.random()*arr.length);
      var characterChosenAbove = arr[randomPlaceInArray]
      return arr[randomPlaceInArray]; 
    }

  //Push to resultPassword array
 console.log(resultPassword)
    //Result
    document.getElementById("password").innerHTML = resultPassword.join(''); 
}
//Calliing the function
generateBtn.addEventListener("click", makePassword);

