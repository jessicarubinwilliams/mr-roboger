// Business Logic

// _Describe: increment()_
// _Test-1: "It parses input to a number and increments a numbersArray of numbers from one to input"
// _Expect(increment("4")).toEqual([1, 2, 3, 4])

// BROKEN no attempts to fix yet
// let numbersArray = [];
// function increment(input) {
//   inputNumber = parseInt(input);
//   for (let i = 0; i = inputNumber; i++) {
//     numbersArray.push(i)
//   }  
// };
// increment(4);

// _Describe: substitute()_
// _Test-1: "It iterates through numbersArray and stringifies the numbers"
// _Expect(substitute(4)).toEqual(["1", "2", "3", "4"])

// _Test-2: It iterates through numbersArray and after stringification, it assesses whether the strings contain, with priority, '3', '2', or '1' and substitutes for any subArray containing a 3 - 'Won't you be my neighbor?',for any subArray without a '3' but containing a '2' - 'Boop!', for any subArray without a '3' or '2' but containing a '1'  - 'Beep'", and for any subArray without a '3', '2', or '1' parses string back to a number" 
// _Expect(substitute(4)).toEqual(["Beep!", "Boop!", "Won't you be my neighbor?", 4])

// _Test-3: "It stringifies numbersArray into outputString"
// _Expect([["Beep!"], ["Boop!"], ["Won't you be my neighbor?"]]).toEqual()

// User Interface Logic  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const userInput = $("input#inputNumber").val();
    verifyInput(userInput);
    
    // $("div#output").show();

    event.preventDefault();
  });
});