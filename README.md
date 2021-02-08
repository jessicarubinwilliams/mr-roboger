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

_This is a weekly independent project for week 3 of Epicodus' Introduction to Programming Course: Arrays and Looping. The project prompt is:_

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

## Tests

_Describe: robogerize()_
_Test-1: "It parses input to a number "_
_Expect(increment("4")).toEqual(4)_

_Test-2: "It increments a numbersArray of numbers from zero to input"_
_Expect(increment("4")).toEqual([0, 1, 2, 3, 4])_

_Test-3: "It iterates through numbersArray and stringifies the numbers"_
_Expect(substitute(4)).toEqual(["0", "1", "2", "3", "4"])_

_Test-4: It iterates through numbersArray and after stringification, it assesses whether the elements contain, with priority, '3', '2', or '1' and substitutes for any element containing a 3 - 'Won't you be my neighbor?',for any element without a '3' but containing a '2' - 'Boop!', for any element without a '3' or '2' but containing a '1'  - 'Beep'", and for any element without a '3', '2', or '1' parses string back to a number"_ 
_Expect(substitute(4)).toEqual(["0", "Beep!", "Boop!", "Won't you be my neighbor?", 4])_

_Test-5: "It turns roboArray into a string"_
_Expect(substitute(4)).toEqual("0, Beep!, Boop!, Won't you be my neighbor?, 4")_

## Known Bugs

* _This is a project in development and not yet working_

## License
*[MIT](https://choosealicense.com/licenses/mit/)*
Copyright (c) **_2021 Jessica R. Williams_**

## Contact Information
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**