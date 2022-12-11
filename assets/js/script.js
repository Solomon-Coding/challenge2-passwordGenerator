// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphLower = "abcdefghijklmnopqrstuvwxyz";
const alphUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const char = "\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";
const options = [alphLower,alphUpper,num,char];
// console.log(options[0])
// console.log(options[1])
// console.log(options[2])
// console.log(options[3])

// Write password to the #password input
function writePassword() {
  var length = 10//Number(window.prompt("Please select a length for the password between 8 and 128", ));
  passwordLength(length);
  var var_list = passwordAttributes();
  var password = generatePassword(length,var_list);
  // let password = pass.join("")
  //  = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // console.log(password.join(''))
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
  var uc = "Y"//window.prompt("Uppercase? (Y/N)",);
  var uc_val = logic(uc);
  var n = "Y"//window.prompt("Numeric? (Y/N)",);
  var n_val = logic(n);
  var sc = "Y"//window.prompt("Special Characters? (Y/N)",);
  var sc_val = logic(sc);
  if (lc=="N"&&uc=="N"&&n=="N"&&sc=="N"){
    passwordAttributes();
  } else {}
  var var_list = [lc_val,uc_val,n_val,sc_val];
  return var_list;
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

function generatePassword(length,vars) {
  var includedVariables = vars[0]+vars[1]+vars[2]+vars[3];
  // console.log(includedVariables);
  var divLength = Math.floor(length/includedVariables);
  var remainder = length%includedVariables;
  // console.log(remainder);
  var rand = [];
  var rand2=[];
  var combinedString = "";
  var ii=0;
  for (var i=0; i<4;i++){
    if ((Number(vars[i]))==1){
      rand[ii] = randomize(options[i],divLength+remainder);
      rand2[ii] = rand[ii].join();
      console.log(ii)
      // combinedString = combinedString+rand[ii];
      if (ii!=0){
        combinedString = combinedString+","+rand[ii];
      }else{
      combinedString = combinedString+rand[ii];
      console.log(combinedString)
      }
      // console.log(randomize(rand[2],divLength))
      // console.log(rand2[2].length)
      remainder = 0;
      ii = ii+1;
    } else {
      ii=ii;
    }
  }
  
  console.log(String(combinedString));
  var randString = shuffle(String(combinedString));
  // var randString = randomize(combinedString,combinedString.length);
  console.log(randString);
  return randString;
  
}

function randomize(array,terms) {
    var randArray = [];
    for (var j=0;j<terms;j++)
    randArray[j] = array[Math.floor(Math.random()*array.length)];
    console.log(randArray)
    return randArray;
}

function shuffle(array) {
  for (var k = array.length - 1; k > 0; k--) {
    var kk = Math.floor(Math.random() * (k + 1));
    var temp = array[k];
    array[k] = array[kk];
    array[kk] = temp;
  }
  return array;
}