//setting up variables
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
var uppercaseAlphabet = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"; 
var numbers = "1, 2, 3, 4, 5, 6, 7, 8, 9, 0";
var symbols = "1, @, #, $, %, ^, &, *, (, ), _, ?. /, ;, :, <, >, [, ], {, },";
var totalCharacterBank = [];
var resultPassword = "";

//Setting up the way the page looks when it loads
window.onload = alert("Create a secure password! Click the button to begin, then select your parameters to generate your new password.");

//Then the person clicks the button to begin
function beginPasswordCreation(){
  var password = makePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

//Asking user to choose parameters
var passwordLength = prompt("How many characters should the password include? Select a number between 8 and 128 characters.")

if(passwordLength <8 || passwordLength > 128){
  alert("Select a number between 8 and 128 characters.");
}
  else{
    if(confirm("Should the password contain lower case letters?")){
      Array.prototype.push.apply(totalCharacterBank, [lowercaseAlphabet])
  }
  if(confirm("Should the password contain upper case letters?")){
      Array.prototype.push.apply(totalCharacterBank, [uppercaseAlphabet])
  }
  if(confirm("Should the password contain special characters?")){
      Array.prototype.push.apply(totalCharacterBank, [symbols])
  }
  if(confirm("Should the password contain numbers?")){
      Array.prototype.push.apply(totalCharacterBank, [numbers])
  }

  //Randomizing
  else{
    for(var i=0; i<passwordLength; i++){
      var randomize = Math.floor(Math.random()*totalCharacterBank.length);
      resultPassword += totalCharacterBank[random]; 
    }
    //Result
    document.getElementById("password").innerHTML = resultPassword; 
  }
}

function makePassword(){
  var totalCharacterBank = [];
  resultPassword = "";  
}

//Making it work on click
generateBtn.addEventListener("click", beginPasswordCreation);

//Calliing the function
makePassword();