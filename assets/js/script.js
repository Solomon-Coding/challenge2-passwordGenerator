// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();

  // passwordCharacters();
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
    // } else if (length==length) {
    //   window.alert("Password is not a number");
    //   passwordLength();
    } else {}
}

// function passwordCharacters() {
// window.alert("Should the password include the following? Please type Y/N")
// LS();
// }

// function LS() {
//   var ls = window.prompt("Lowercase?","Yes");
//   if (ls!="Y" || ls!="N")

// }
// should the password include
// lowercase
// uppercase
// numeric
// special charicters
