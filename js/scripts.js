// Business Logic


function robogerize(input) {
  let numbersArray = [];
  inputNumber = parseInt(input);
  for (let index = 0; index <= inputNumber; index++) {
    numbersArray.push(index)
  }
  const stringifiedArray = numbersArray.map(function(number) {
    return number.toString();
  });
  const roboArray = stringifiedArray.map (function(string) {
    if  (string.includes("3") === true) {
      return string = "\"Won't you be my neighbor?\"";
    } if (string.includes("2") === true) {
      return string = "\"Boop!\"";
    } if (string.includes("1") === true) {
      return string = "\"Beep!\"";
    } else {
      return string;
    }
  });
  const roboString = roboArray.join(", ");
  return roboString;
};

// User Interface Logic  
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#inputNumber").val();    
    $("div#output").show();
    $("div#output").text(robogerize(userInput))
  });
});