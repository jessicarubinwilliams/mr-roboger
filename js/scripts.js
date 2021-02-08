// Business Logic

let numbersArray = [];
function increment(input) {
  inputNumber = parseInt(input);
  for (let index = 0; index <= inputNumber; index++) {
    numbersArray.push(index)
  }  
};

const stringifiedArray = numbersArray.map(function(number) {
  return number.toString();
});

const roboArray = stringifiedArray.map (function(string) {
  if  (string.includes("3") === true) {
    return string = "Won't you be my neighbor?";
  } if (string.includes("2") === true) {
    return string = "Boop!";
  } if (string.includes("1") === true) {
    return string = "Beep!";
  } else {
    return string;
  }
});

// User Interface Logic  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userInput = $("input#inputNumber").val();
    increment(userInput);
    console.log(userInput); //works
    console.log(numbersArray); //works
    stringifiedArray;  //how does one call a loop assigned to a constant?
    console.log(stringifiedArray) //broken--logs an empty array; everything after this broken too.
    roboArray;

    $("div#output").show();
    $("div#output").append(roboArray)
  });
});