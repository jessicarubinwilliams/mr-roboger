// Business Logic

// _Describe: increment()_
// _Test-1: "It parses input to a number "_
// _Expect(increment("4")).toEqual(4)_

// _Test-2: "It increments a numbersArray of numbers from zero to input"_
// _Expect(increment("4")).toEqual([0, 1, 2, 3, 4])_

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




// User Interface Logic  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#inputNumber").val();
    
    // $("div#output").show();

    
  });
});