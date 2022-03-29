// Start your code ***HERE*** =========

// Create character literals
const charTypes = ["upper", "lower", "number", "special"];
function convertToString(i, j){
  let set="";
	for(k = i; k < j; k++){
		//convert the char code to string (Alphabets)
		set+=String.fromCharCode(k);
	}
  // console.log(set);
  return set;
}
const upper = convertToString(97,123);
const lower = convertToString(65,91);
const number = convertToString(48,58);
const special = "!@#$%^&*()";
/**
 * Enum for common colors.            https://stackoverflow.com/questions/44447847/enums-in-javascript-with-es6
 * @readonly
 * @enum {{name: string, length: number}}
 */
const CharTypes = Object.freeze({
  // UPPER:   Symbol(0),
  // LOWER:  Symbol(1),
  // NUMBER: Symbol(2),
  // SPECIAL: Symbol(3);
  UPPER: {name:"upper", length: upper.length},
  LOWER: {name:"lower", length: lower.length},
  NUMBER: {name:"number", length: number.length},
  SPECIAL: {name:"special", length: special.length}
});

// Create a global variable called "pwLength" with a number between 10 and 18
const min=12, max=18;
let pwLength;

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
function addNewPassword(){
  let i=0;
  let str = "";
  pwLength = Math.ceil(Math.random() * (max - min)) + min;
  console.log("Password Length: "+ pwLength);
  while(i<pwLength){
    i++;
    let type = charTypes[Math.floor(Math.random()*4)];
    let len, random="";
    switch (type) {
      case 'upper':
        len=CharTypes.UPPER.length;
        random = upper.charAt(Math.floor(Math.random()*len));
        break;
      case 'lower':
        len=CharTypes.LOWER.length;
        random = lower.charAt(Math.floor(Math.random()*len));
        break;
      case 'number':
        len=CharTypes.NUMBER.length;
        random = number.charAt(Math.floor(Math.random()*len));
        break;
      case 'special':
        len=CharTypes.SPECIAL.length;
        random = special.charAt(Math.floor(Math.random()*len));
        
        break;
      default:
        console.log(`Sorry, no type as ${type}.`);
    }
    // console.log("random: "+random, "len: "+len);
    str+=random;
  }
  // console.log("Generated Password: "+str);
  return str;
}

//https://www.w3resource.com/javascript/form/password-validation.php
function CheckPassword(inputtxt) { 
  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if(inputtxt.value.match(decimal)) { 
    alert('Correct, try another...')
    return true;
  }
  else{ 
    alert('Wrong...!')
    return false;
  }
} 
// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
