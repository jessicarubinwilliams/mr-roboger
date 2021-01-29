// _Describe: verifyInput()_
// _Test-1: "It verifies there is input"
// _Expect(verifyInput("")).toEqual(false)

// _Test-2: "It verifies input is a number"
// _Expect(verifies"hello".toEqual(false)

// BROKEN
// function verifyInput(input) {
//   if (input != "") {
//     console.log("Please enter a number");
//     return false;
//   } else if (Number.isFinite(parseInt(input)) === false ) {
//     console.log("For this to work, your entry needs to be a number.");
//     return false;
//   }
// };
// verifyInput();
// verifyInput("hello");
// verifyInput("7");
// RETURNS:
// "Please enter a number"
// "Please enter a number"
// "Please enter a number"


// ALSO BROKEN
// function verifyInput(input) {
//   if (input) {
//     if (input !== "")
//     console.log("Please enter a number");
//     return false;
//   } else if (Number.isFinite(parseInt(input)) === false ) {
//     console.log("For this to work, your entry needs to be a number.");
//     return false;
//   } else {
//   console.log("Nice number.")
//     return true;
//   }
// };
// verifyInput();
// verifyInput("hello");
// verifyInput("7");
// RETURNS:
// "For this to work, your entry needs to be a number."
// "Please enter a number"
// "Please enter a number"

function verifyInput(input) {
  if (input) 
    if (Number.isFinite(parseInt(input)) === false ) {
    console.log("For this to work, your entry needs to be a number.");
    return false;
  } else if (Number.isFinite(parseInt(input)) === true ) {
    console.log("Nice number.");
    return true;
  }  else {
    console.log("Please enter a number.")
    return false;
  }
};
verifyInput();
RETURNS: NOTHING
verifyInput("hello");
RETURNS: "For this to work, your entry needs to be a number."
verifyInput("7");
RETURNS: "Nice number."

// _Describe: increment()_
// _Test-1: "It parses input to a number and increments a numbersArray of numbers from one to input"
// _Expect(increment("4")).toEqual([1, 2, 3, 4])

let numbersArray = [];
function increment(input) {
  inputNumber = parseInt(input);
  for (let i = 1; i = inputNumber; i++) {
    numbersArray.push(i)
  }  
};
increment(4);






// _Describe: substitute()_
// _Test-1: "It iterates through numbersArray and stringifies the numbers"
// _Expect(substitute(4)).toEqual(["1", "2", "3", "4"])

// _Test-2: It iterates through numbersArray and after stringification, it assesses whether the strings contain, with priority, '3', '2', or '1' and substitutes for any subArray containing a 3 - 'Won't you be my neighbor?',for any subArray without a '3' but containing a '2' - 'Boop!', for any subArray without a '3' or '2' but containing a '1'  - 'Beep'", and for any subArray without a '3', '2', or '1' parses string back to a number" 
// _Expect(substitute(4)).toEqual(["Beep!", "Boop!", "Won't you be my neighbor?", 4])

// _Test-3: "It stringifies numbersArray into outputString"
// _Expect([["Beep!"], ["Boop!"], ["Won't you be my neighbor?"]]).toEqual()