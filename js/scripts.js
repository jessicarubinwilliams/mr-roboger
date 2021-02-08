// Business Logic

// let numbersArray = [];
function increment(input) {
  inputNumber = parseInt(input);
  for (let index = 0; index <= inputNumber; index++) {
    numbersArray.push(index)
  }  
};
// increment("4");
// numbersArray;
// returns: (5) [0, 1, 2, 3, 4]

// _Describe: substitute()_
// _Test-1: "It iterates through numbersArray and stringifies the numbers"_
// _Expect(substitute(4)).toEqual(["0", "1", "2", "3", "4"])_

// let numbersArray = [0, 1, 2, 3, 4]
const stringifiedArray = numbersArray.map(function(number) {
  return number.toString();
});
// stringifiedArray;
// returns: (5) ["0", "1", "2", "3", "4"]


// User Interface Logic  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#inputNumber").val();
    
    // $("div#output").show();

    
  });
});