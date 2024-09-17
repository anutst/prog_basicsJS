// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 1 - BASIC OUTPUT TO THE CONSOLE

console.log('Hello world'); 

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 2 - VARIABLES and CONSTANTS

// Example of a string variable
let nimi = 'Anu';
console.log(nimi);

// Example of a constant
const birthYear = 2001; // Value can't be changed later in the code
console.log(birthYear);

/* !OLULINE! - GUIDELINES FOR NAMING VARIABLES

1. Avoid reserved keywords:
   - `let`, `const`, `function` etc

2. Choose meaningful names:
   - `userName` or `totalPrice`, instead of `x`, `y`, or `temp`

3. No numbers at the start:
   -  `1name` is invalid, instead use `name1` etc

4. No spaces or hyphens:
   -  Use underscores (`_`) or camelCase instead -> `first_name` or `firstName`.

5. Use camelCase:
   - camelCase for multiple words (e.g., `firstName`, `totalAmount`).

*/

// Examples of using variables with meaningful names
let firstName = 'Eesnimi';
let lastName = 'Perenimi';
console.log(firstName);
console.log(lastName);

// Example of using a variable with a number
let interestRate = 0.3;
interestRate = 1; // The value can be changed if declared with let
console.log(interestRate);


/*  !OLULINE! CONSTANTS = VALUES THAT CANNOT BE CHANGED /// USE CONST BY DEFAULT. USE 'let' ONLY IF YOU NEED TO REASSIGN THE VARIABLE LATER

(Would cause an error because interestRate is a constant): 

const interestRate = 0.3;
interestRate = 1; 

*/
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 3 - DATA TYPE & OBJECT

// Different data types
let name = 'Anu'; // String literal
let primaryAge = 23; // Number literal
let isApproved = false; // Boolean literal
let undefinedVar = undefined; // Undefined literal (can also be left undefined by default)
let selectedColor = null; // Null value (useful for resetting a variable)

// Creating an object
let personData = {
    minuNimi: 'Anu',
    vanus: 23
};

// Accessing object properties with dot notation
personData.name = 'Anu'; // Updates the name property

// Accessing object properties with bracket notation
let selection = 'name';
personData[selection] = 'Anna'; // Updates the name property to 'Anna'
console.log(personData, personData.vanus); // Fix: log personData.vanus, not vanus

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 4 - ARRAYS

// Creating an array of colors
let colorsArray = ['red', 'blue'];

// Adding elements to the array
colorsArray[2] = 'green'; // Adds 'green' as the third element in the array
console.log(colorsArray);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 5 - FUNCTIONS

// Function to perform a task - Greeting function
function greet(name, lastName) {
    console.log('Tere täitsa hästi said hakkama! ' + name + ' ' + lastName);
}

// Calling the function with different arguments
greet('Mari', 'Liis'); 
greet('Kadri', 'Lill');

// Function to calculate a value - Squaring a number
function square(number) {
    return number * number;
}

// Outputting the result of the square function
console.log(square(2));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 6 - OBJECTS and FUNCTIONS()

// 1) Object method - Add a method to the person object that returns a greeting.
let personObj = {
  userName: 'Rocco',
  age: 36,
  greet: function() {
      return `Hello, my name is ${this.userName} and I am ${this.age} years old.`;
  }
};
console.log(personObj.greet()); // Outputs: 'Hello, my name is Rocco and I am 23 years old.'

// 2) Object destructuring - Use destructuring to extract properties from an object.
let anotherPerson = { contactName: 'Marit', currentAge: 35 };
let { contactName, currentAge } = anotherPerson;
console.log(contactName); // Outputs: 'Marit'
console.log(currentAge); // Outputs: 35

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 7 - CONDITIONAL STATEMENTS

// Using if-else statements to check conditions
let myAge = 23;

if(myAge > 18) {
    console.log('You are an adult'); // Output if age is greater than 18
}

// Random number generator and conditional checks
let randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99

if (randomNumber < 30) {
    console.log(randomNumber + " vähem kui 30"); 
} 
else if (randomNumber >= 30 && randomNumber <= 70) {
    console.log(randomNumber + " on 30 ja 70 vahel"); 
} 
else {
    console.log(randomNumber + " suurem kui 70");
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 8 - SWITCH STATEMENT

// Using switch to determine a simple message based on a random number
let randomNum = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2

switch (randomNum) {
    case 0:
        console.log("Sul on kass!"); // If randomNum is 0
        break;
    case 1:
        console.log("Sul on koer!"); // If randomNum is 1
        break;
    case 2:
        console.log("Sul on papagoi!"); // If randomNum is 2
        break;
    default:
        console.log("Sul ei ole midagi"); // Default case for any unexpected values
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 9 - LOGICAL OPERATORS and TERNARY OPERATOR

// Logical NOT operator (!) reverses the boolean value
let isHappy = true;
console.log(!isHappy); // Outputs false

let isSad = false;
console.log(!isSad); // Outputs true

// Ternary operator for conditional checks
let age = 23;
let msg = (age >= 18) ? 'Sa oled noor' : 'Sa oled vana';
console.log(msg); // Outputs the appropriate message based on age

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 10 - ARRAY.MAP()

// 1) Given an array of numbers, add 1 to each number
let numbersArray = [1, 2, 3, 4, 5];
let incrementedNumbers = numbersArray.map(function(number) {
    return number + 1;
});
console.log(incrementedNumbers); // Outputs: [2, 3, 4, 5, 6]

// 2) Given an array of strings, convert each string to uppercase
let fruitsArray = ['maasikas', 'vaarikas', 'murakas'];
let uppercaseFruits = fruitsArray.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(uppercaseFruits); // Outputs: ['MAASIKAS', 'VAARIKAS', 'MURAKAS']

// 3) Given an array of numbers, square each number
let numsArray = [1, 2, 3, 4, 5];
let squaredNumbers = numsArray.map(function(num) {
    return num * num;
});
console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 11 - ARRAY.SLICE()

// 1) Given an array of numbers, get the first 3 elements
let numbersList = [1, 2, 3, 4, 5];
let firstThree = numbersList.slice(0, 3);
console.log(firstThree); // Outputs: [1, 2, 3]

// 2) Given an array of fruits, get the last 2 fruits
let fruitsList = ['apple', 'banana', 'cherry', 'mango'];
let lastTwoFruits = fruitsList.slice(-2);
console.log(lastTwoFruits); // Outputs: ['cherry', 'mango']

// 3) Given an array of colors, get the middle 3 colors
let colorList = ['red', 'blue', 'green', 'yellow', 'purple'];
let middleThreeColors = colorList.slice(1, 4);
console.log(middleThreeColors); // Outputs: ['blue', 'green', 'yellow']

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 12 - LOOP

// 1) Given an array of numbers, multiply each number by 2
let initialNumbers = [1, 2, 3, 4, 5];
let multipliedNumbers = [];
for (let i = 0; i < initialNumbers.length; i++) {
    multipliedNumbers.push(initialNumbers[i] * 2);
}
console.log(multipliedNumbers); // Outputs: [2, 4, 6, 8, 10]

// 2) Given an array of strings, add '!' to the end of each string
let strArray = ['õde', 'tädi', 'ema'];
let excitedStrings = [];
for (let i = 0; i < strArray.length; i++) {
    excitedStrings.push(strArray[i] + '!');
}
console.log(excitedStrings); // Outputs: ['õde!', 'tädi!', 'ema!']

// 3) Given an array of colors, print each color in uppercase
let colorsList = ['red', 'blue', 'green'];
for (let i = 0; i < colorsList.length; i++) {
    console.log(colorsList[i].toUpperCase());
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 13 - FILTER()

// Given an array of numbers, filter out only even numbers
let numbersSet = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbersSet.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // Outputs: [2, 4, 6]

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 14 - REDUCE()

// Given an array of numbers, find the sum of all numbers
let numsSet = [1, 2, 3, 4, 5];
let totalSum = numsSet.reduce(function(accumulator, number) {
    return accumulator + number;
}, 0);
console.log(totalSum); // Outputs: 15

// 1) Given an array of strings, concatenate all strings into a single string
let strSet = ['Hello', 'World', 'from', 'JavaScript'];
let concatenatedString = strSet.reduce(function(accumulator, str) {
    return accumulator + ' ' + str;
}, '');
console.log(concatenatedString); // Outputs: 'Hello World from JavaScript'

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 15 - OBJECTS

// 1) Given an object, add a new property
let student = {
  name: 'Jaanus',
  age: 21
};
student.grade = 'A'; // Adds a new property 'grade'
console.log(student); // Outputs: {name: 'Jaanus', age: 21, grade: 'A'}

// 2) Given an object, remove a property
let personDetails = {
  firstName: 'Paul',
  lastName: 'Smith',
  age: 30
};
delete personDetails.age; // Removes the 'age' property
console.log(personDetails); // Outputs: {firstName: 'Paul', lastName: 'Smith'}

// 3) Given an object, check if it has a specific property
let personInfo = {
  name: 'Maria',
  city: 'Tallinn'
};
console.log('city' in personInfo); // Outputs: true (if 'city' exists in personInfo)
console.log('age' in personInfo); // Outputs: false (if 'age' does not exist in personInfo)

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 16 - TEMPLATE LITERALS

// Creating a string using template literals
let personName = 'Aili';
let personAge = 25;
let greetingMessage = `Tere! Minu nimi on ${personName} ja ma olen ${personAge} aastat vana.`;
console.log(greetingMessage); // Outputs: 'Tere! Minu nimi on Aili ja ma olen 25 aastat vana.'

// KODUTÖÖ ÜLESANNE

// Funktsioon, mis kontrollib, kas koer on sõbralik
function isFriendlyDog(mood) {
  return mood === "sõbralik";
}

// Näide: Kontrollime, kas koer on sõbralik
let dogMood = "sõbralik"; 
if (isFriendlyDog(dogMood)) {
  console.log("Koer on sõbralik.");
} else {
  console.log("Koer on kuri.");
}


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 17 - CALLING A FUNCTION - VÄGA OLULINE!

function sayThanks() {
    console.log('Aitäh ostu eest , ootame sind tagasi!');
  }
  sayThanks(''); //Võib mitmeid kordi kirjutada, antud juhul nt 3 klienti sooritasid ostu ja kõigile jõuab aitäh ostu eest kiri.  // Output on ''Aitäh ostu eest, ootame sind tagasi
 

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 18 - PARAMETERS & ARGUMENTS

function sayThanks(name) {
    console.log('Aitäh ostu eest ' + name + ', ootame sind tagasi');
}
sayThanks('Anu');

// või teha sama ülesanne lihtsamaks kasutades template literali:

function sayThanks(name) {
    console.log(`Aitäh ostu eest ${name}, ootame sind tagasi`);
}
sayThanks('Marit');

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ÜLESANNE 19 - Default parameter(s)

function greeting (name = 'võõras') {
    console.log(`Hei, ${name}!`)
  }
  
  greeting('Krõõt') // Output: Hello, Krõõt!
  greeting() // Output: Hei, võõras!


  // Ostulist 

  function makeShoppingList(item1 = 'pelmeene', item2 = 'hapukoort', item3 = 'õli'){
    console.log(`Mäleta poest võtta ${item1}`);
    console.log(`Mäleta poest võtta ${item2}`);
    console.log(`Mäleta poest võtta ${item3}`);
  }
  
// Call the function to execute it: 

makeShoppingList();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ÜLESANNE 20 - RETURN STATEMENT (Mitu kassitoitu on vaja lattu viia)

// 1 variant
function foodCount(rows, columns) { 
    return rows * columns;
  };
  const numOfFood = foodCount(5, 4);
  console.log(numOfFood);

  // 2 variant, mis on täpsustatud rohkem

function kassitoiduKogus(read, veerud) { 
    return read * veerud;
  };
  
  const kassitoiduArv = kassitoiduKogus(5, 4);
  console.log(`Lattu on vaja viia ${kassitoiduArv} kassitoitu.`);
  

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ÜLESANNE 21 - HELPER FUNCTIONS

// Funktsioon, mis arvutab kassitoidu koguse, ehk korrutab read ja veerud
function kassitoiduKogus(read, veerud) {
    return read * veerud;
  }
  
  // Funktsioon, mis arvutab kassitoidu kogumaksumuse, ehk korrutab kassitoitu koguse ühe ühiku hinnaga
  function kassitoiduMaksumus(read, veerud) {
    return kassitoiduKogus(read, veerud) * 25; // Oletan, et ühe kassitoidu hind on 25 eurot
  }
  
  // Arvutab ja salvestab kassitoidu kogumaksumuse muutujasse
  const koguMaksumus = kassitoiduMaksumus(5, 4);
  
  console.log(koguMaksumus); //Konsool kuvab, et kokku läheb kassitoit maksma 500 eurot
  
/* Selgitus:

kassitoiduKogus - Arvutab, mitu kassitoitu on kokku vaja, korrutades read ja veerud
kassitoiduMaksumus - Arvutab, kui palju kassitoit läheb maksma, korrutades kassitoidu koguse ühe ühiku hinnaga (25€)
kogumaksumus - Salvestab arvutatud kogumaksumuse
console.log(kogumaksumus): Kuvab arvutatud kogumaksumuse konsoolis
*/

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ÜLESANNE 22 - FUNCTION EXPRESSIONS

// 1) Oletame, et meil on taim, mida peab kastma üks kord nädalas kolmapäeviti
// 2) Kontrollime, mis päev nädalas on ja kas taime peab kastma

const plantNeedsWater = function(day) {     // Kontrollib, kas antud päev on kolmapäev
    if(day === 'Wednesday'){         // Kui päev on kolmapäev, siis tagastab 'true', mis tähendab, et taime peab kastma
        return true;
    } else {        // Kui päev ei ole kolmapäev, siis tagastab 'false', st taime ei pea kastma
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'));


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ÜLESANNE 23 - ARROW FUNCTIONS (Arrow function syntax, shorter way to write functions by using ''fat arrow''  () => notation
// Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } 

const flowerNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ÜLESANNE 24 - BODY ARROW FUNCTIONS 

/* 
Functions that take only a single parameter don't need that parameter to be enclosed in parentheses. BUT, if a function takes zero or multiple parameters, parentheses are required

ZERO PARAMETERS 
const functionName = () => {} ;

ONE PARAMETER
const functionName = paramOne => {} ;

TWO OR MORE PARAMETERS
const functionName = (paramOne, paramTwo) => {} ;

A function body composed of a single-line block does not need curly braces. Without the curly braces, 
whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

SINGLE-LINE BLOCK
const sumNumbers = number => number + number ;

MULTI-LINE BLOCK
const sumNumbers = number => {
    const sum = nnumber + number;
    return sum;      (See on return statement)
    }

    Ehk enne: 

    const squareNum = (num) => {
  return num * num;

  Pärast:
  const squareNum = num => num * num;

  // Algne massiiv
let snäkidArray = ['krõpsud', 'küpsised', 'šokolaad', 'kummikommid', 'juustupulgad'];

// Lisa nimekirja lõppu 'kananagitsad'
snäkidArray.push('kananagitsad');

// Muuda esimene väärtus, pane selle asemele 'pähklid'
snäkidArray[0] = 'pähklid';

// Kasuta .length, et printida elementide arv massiivis
console.log("Elementide arv massiivis: " + snäkidArray.length);

// Kasuta .sort(), et sorteerida elemendid tähestiku järjekorda
snäkidArray.sort();

// Prindi sorteeritud massiiv
console.log("Sorteeritud massiiv: " + snäkidArray);


};

*/

//Kas roos vajab vett kui täna on kolmapäev
const roseNeedsWater = day => day === 'Wednesday' ? true : false;

// Kontroll, kas vajab teisipäeval vett?
console.log(roseNeedsWater('Tuesday')); //false, ei vaja



function greetUser(Nimi) {
  return 'Tere, ' + Nimi + '!';
}

console.log(greetUser('Anna'));  // Tulemuseks on "Tere, Anna!"
console.log(greetUser('Mari'));  // Tulemuseks on "Tere, Mari!"


const küljePikkus = 5;
const pindAla = küljePikkus * küljePikkus;

console.log("Pindala: " + pindAla);


// ESITLUSTE ÜLESANDEID

let kyljepikkus = 5; // näiteks 5 ühikut
let pindala = kyljepikkus * kyljepikkus;

console.log("Ruudu pindala on: " + pindala);


let kasutajaNimi = "Sandra";
let synniaasta = 1995;

// praegune aasta googeldades
let praeguneAasta = new Date().getFullYear();
let vanus = praeguneAasta - synniaasta;
console.log(`Tere ${kasutajaNimi}! Sa oled ${vanus}-aastane.`);



// Kasutan PUSH et lisada juurde nimekirja asju

let snäkid = ['krõpsud', 'küpsised', 'šokolaad', 'kummikommid', 'juustupulgad'];
snäkid.push('kananagitsad');
snäkid[0] = 'pähklid';
console.log("Elementide arv nimekirjas: " + snäkid.length);
snäkid.sort();
console.log("Nimekiri: " + snäkid);


/* 
LENGTH  snäkidArray[snäkidArray.length] = 'kananagitsad';

// SPLICE snäkidArray.splice(snäkidArray.length, 0, 'kananagitsad');


//FOR loop - kui ei tea, mis numbrini minna 
//WHILE loop ... */

// Numbrid ühest üheksani
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

/*  Kasuta FOR tsükli et leida kõikide paarisarvude summa vahemikus 1-10

