// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphLower = "abcdefghijklmnopqrstuvwxyz";
const alphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const char = "\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";
const options = [alphLower,alphUpper,num,char];


// Write password to the #password input
function writePassword() {
  var length = 10//Number(window.prompt("Please select a length for the password between 8 and 128", ));
  passwordLength(length);
  var var_list = passwordAttributes();
  generatePassword(length,var_list[0],var_list[1],var_list[2],var_list[3])

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for setting password length
function passwordLength(length) {
    if (length < 8) {
      window.alert("Password is to short");
      passwordLength();
    } else if (length > 128) {
      window.alert("Password is to long");
      passwordLength();
    } else {
    }
}

function passwordAttributes() {
  window.alert("Should the password include the following? Please type Y/N")
  var lc = "Y"//window.prompt("Lowercase? (Y/N)",);
  var lc_val = logic(lc);
  var uc = "N"//window.prompt("Uppercase? (Y/N)",);
  var uc_val = logic(uc);
  var n = "Y"//window.prompt("Numeric? (Y/N)",);
  var n_val = logic(n);
  var sc = "Y"//window.prompt("Special Characters? (Y/N)",);
  var sc_val = logic(sc);
  var var_list = [lc_val,uc_val,n_val,sc_val];
  return var_list
}

function logic(num) {
  if (num=="Y" || num=="N") {
    if (num == "Y"){
      num_val = 1;
    } else {
      num_val = 0;
    }
  } else {
    window.alert("please enter 'Y' or 'N'");
    logic();
  }
  return num_val;
}

function generatePassword(length,var1,var2,var3,var4) {
  var includedVariables = var1+var2+var3+var4;
  console.log(includedVariables);
  var divLength = Math.floor(length/includedVariables);

  console.log(divLength);
  var remainder = length%includedVariables;
  console.log(remainder);
  var randomList = alphLower[Math.round(Math.random()*alphLower.length)] + alphUpper[Math.round(Math.random()*alphUpper.length)];
}
