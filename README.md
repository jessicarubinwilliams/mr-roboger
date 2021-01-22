# _Mr. Roboger's Neighborhood_

#### _A web-based application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the some silly exceptions_

#### By _**Jessica R. Williams**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap Library_
* _JavaScript_
* _jQuery Library_

## Description

_This is a weekly independent project for week 3 of Epicodus' Introduction to Programming Course: Arrays and Looping. The proejct prompt is:_

_Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_

* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_
* _These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,_

* _The number 13 should be replaced with "Won't you be my neighbor?"_
* _The number 21 should be replaced with "Boop"._
* _The number 32 should be replaced with "Won't you be my neighbor?"_
* _A user should be able to enter a new number and see new results over and over again._

## Setup/Installation Requirements

* _Open the terminal on your local machine_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/mr-roboger>`_
* _Navigate to the top level of the repository with the command `$ cd mr-roboger`_
* _Open index.html in the browser of your choice with the command `$ open index.html`_.

<!-- _Alternatively,_

* _Direct your browser to a [live version on GitHub Pages.] (jessicarubinwilliams.github.io/mr-roboger/index.html)_ -->

## Specifications

_Behavior - The program should handle: numbers that contains a 1_
_Input Example - When it receives: 1_
_Output Example - It should return: "Beep!"_

_Behavior - The program should handle: numbers that contain a 2_
_Input Example - When it receives: 2_
_Output Example - It should return: "Beep!", "Boop!"_

_Behavior - The program should handle: numbers that contain a 3_
_Input Example - When it receives: 3_
_Output Example - It should return: "Beep!", "Boop!", "Won't you be my neighbor?"_

_Behavior - The program should handle: numbers that contain 1 and 2_
_Input Example - When it receives: 12_
_Output Example - It should return: "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 7, 9, 10, "Beep", "Boop"_

_Behavior - The program should handle: numbers that contain 1 and 3_
_Input Example - When it receives: 13_
_Output Example - It should return: "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 7, 9, 10, "Beep", "Boop", "Won't you be my neighbor?"_

_Behavior - The program should handle: numbers that contain 2 and 3_
_Input Example - When it receives: 23_
_Output Example - It should return: "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 7, 9, 10, "Beep", "Boop", "Won't you be my neighbor?", "Beep", "Beep", "Beep", "Beep", "Beep", "Beep", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"_

_Behavior - The program should handle: Multiple uses_
_Input Example - When it receives: A new user entry_
_Output Example - It should return: A new result and hide the previous result_

_Behavior - The program should handle: inputs that aren't numbers_
_Input Example - When it receives: "hello" or " " or "@#$@#$"_
_Output Example - It should return: "Please enter a number."_


## Tests

_Describe: yourFunctionName()_
_Test: "It does something"_
_Expect(yourFunctionName("expected input")).toEqual("expected output");_


## Known Bugs

* _Any known issues_
* _should go here_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Jessica R. Williams_**

## Contact Information
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**