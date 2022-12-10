// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphLower = "abcdefghijklmnopqrstuvwxyz";
const alphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const char = "\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";
const options = [alphLower,alphUpper,num,char];

console.log(options)
// Write password to the #password input
function writePassword() {
  // passwordLength();
  passwordCharacters();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for setting password length
function passwordLength() {
    var length = Number(window.prompt("Please select a length for the password between 8 and 128", ));
    console.log(typeof(length))
    if (length < 8) {
      window.alert("Password is to short");
      passwordLength();
    } else if (length > 128) {
      window.alert("Password is to long");
      passwordLength();
    } else {}
}

function passwordCharacters() {
  window.alert("Should the password include the following? Please type Y/N")
  // var options = [];
  lowerCase();
  upperCase();
  numeric();
  specialCharacters();
}

function lowerCase() {
  var lc = window.prompt("Lowercase?",);
  if (lc=="Y" || lc=="N") {
    if (lc == "Y"){
      lc_val = 1;
    } else {lc_val = 0;
    }
  } else {
    window.alert("please enter 'Y' or 'N'");
    lowerCase();
  }
  return lc_val;
}

function upperCase() {
  var uc = window.prompt("Uppercase?",);
  if (uc=="Y" || uc=="N") {
    if (uc == "Y"){
      uc_val = 1;
    } else {uc_val = 0;
    }
  } else {
    window.alert("please enter 'Y' or 'N'");
    upperCase();
  }
  return uc_val;
}

function numeric() {
  var n = window.prompt("Numeric?",);
  if (n=="Y" || n=="N") {
    if (n == "Y"){
      n_val = 1;
    } else {n_val = 0;
    }
  } else {
    window.alert("please enter 'Y' or 'N'");
    numeric();
  }
  return n_val;
}

function specialCharacters() {
  var sc = window.prompt("Special Characters?",);
  if (sc=="Y" || sc=="N") {
    if (sc == "Y"){
      sc_val = 1;
    } else {sc_val = 0;
    }
  } else {
    window.alert("please enter 'Y' or 'N'");
    specialCharacters();
  }
  return sc_val;
}


  // function variableDistribution(var_lc,var_uc,var_n,var_sc) {
  //   var includedVariables = var_lc+var_uc+var_n+var_sc;
  //   var divLength = Math.floor(length/includedVariables);
  //   var divLengthRemainder = length%includedVariables;

  //   var randomList = alphLower[Math.round(Math.random()*alphLower.length)] + alphUpper[Math.round(Math.random()*alphUpper.length)];
  // }
