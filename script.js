///////////////////////////////////////
// Activating Strict Mode
///////////////////////////////////////

// // So strict mode is a special mode
// // that we can activate in JavaScript,
// // which makes it easier for us
// // to write a secure JavaScript code.
// // And all we have to do to activate strict mode
// // is to write this ring at the beginning of the script
// // so use strict and that's it.

"use strict"; //activate strict mode

// // So basically it helps us introduce the bugs into our code
// // and that's because of 2 reasons.

// // First, strict mode forbids us to do certain things
// // and second, it will actually create visible errors for us
// // in certain situations in which without strict mode
// // JavaScript will simply fail silently
// // without letting us know that we did a mistake.
// // Okay.
// // So again, first strict mode forbids us to do certain things

// // and second it creates visible errors
// // and the developer console, where in other situations
// // JavaScript would just fail silently.
// // Okay, but now to make this a bit more clear,

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// // const interface = "Audio";
// // const private = 534;
// // const if = 2;

///////////////////////////////////////
// Functions
///////////////////////////////////////

// // Well in the most simple form a function
// // is simply a piece of code that we can reuse
// // over and over again in our code.
// // So it's a little bit like a variable
// // but for whole chunks of code.
// // So remember a variable holds value
// // but a function can hold one or more complete lines of code.

// function logger() {
//   console.log("My name is Elmar");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();
// //                         parameter
// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0); //argument
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

///////////////////////////////////////
// Function Declarations vs. Expressions
// ///////////////////////////////////////

// // Function Declarations
// const age1 = calAge1(1991); // arguments or parameter

// function calAge1(birthYear) {
//   // const age = 2037 - birthYear;
//   // return age;

//   return 2037 - birthYear;
// }

// // Function Expressions
// // Expression produce value
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calAge2(1991);
// console.log(age1, age2);

// // So what's the big difference between
// // function declarations and function expressions?
// // Well, the main practical difference
// // is that we can actually call function declarations
// // before they are defined in the code.
// // So let me show that to you.
// // So here is the declaration, right?
// // This is the function declaration and as I just said,
// // we can call them in a code before they are defined.
// // So now we're calling it first and then defining it later.

///////////////////////////////////////
// Arrow Functions
///////////////////////////////////////

// // but there is actually a third type
// // of function that was added to JavaScript in ES6
// // and that's the arrow function.
// // And an arrow function is simply a special form
// // of function expression that is shorter
// // and therefore faster to write.
// // So let's actually get back this function expression

// // Arrow function
// const calAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);
// // So this value here will automatically be returned
// // without us having to explicitly write the return keyword.

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Elmar"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// // What type of function should I use?
// // Should I use arrow functions for everything
// // since they're so easy to write?
// // And well, the answer is no.
// // But it's also complicated.
// // That's because there is another fundamental difference
// // between the arrow function and more traditional functions.
// // So function declarations and function expressions.
// // It's the fact that arrow function
// // do not get a so-called this keyword.

///////////////////////////////////////
// Functions Calling Other Functions
///////////////////////////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Reviewing Functions
///////////////////////////////////////

// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//     console.log(`${firstName} retires in ${retirement} years`); ////cannot be reacch
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1; // or return 99999   a number thats no meaning
//     console.log(`${firstName} has already retired`); //cannot be reacch
//   }
// };

// console.log(yearsUntilRetirement(1991, "Elmar"));
// console.log(yearsUntilRetirement(1950, "Mike"));

///////////////////////////////////////
// JavaScript Fundamentals – Part 2
// Coding Exercise 5: CHALLENGE #1
///////////////////////////////////////

// // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// // gymnastics discipline, which works differently.
// // Each team competes 3 times, and then the average of the 3 scores is calculated (so
// // one average score per team).
// // A team only wins if it has at least double the average score of the other team.
// // Otherwise, no team wins!

// // Your tasks:
// // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// // 2. Use the function to calculate the average for both teams
// // 3. Create a function 'checkWinner' that takes the average score of each team
// // as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// // to the console, together with the victory points, according to the rule above.
// // Example: "Koalas win (30 vs. 13)"
// // 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// // Data 2
// // 5. Ignore draws this time

// // Test data:
// // § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// // Hints:
// // § To calculate average of 3 values, add them all together and divide by 3
// // § To check if number A is at least double number B, check for A >= 2 * B.
// // Apply this to the team's average scores �

// // GOOD LUCK �

// const calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // Test1
// let scoreDolphins = calAverage(44, 23, 71);
// let scoreKoalas = calAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`${"Dolphins"} win (${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`${"Koalas"} win (${avgDolphins} vs ${avgKoalas}`);
//   } else {
//     console.log("No team wins!");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(500, 150);

// // // Test2
// scoreDolphins = calAverage(85, 54, 41);
// scoreKoalas = calAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays
///////////////////////////////////////

// // Array is a data structure

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// // 1 way
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // 2 way
// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // Well what I didn't tell you at the time,
// // is that only primitive values, are immutable.
// // But an Array is not a primitive value.
// // And so we can actually always change it so we can mutate it.
// // So what you need to know for now
// // is that we can actually mutate Arrays
// // even though they were declared with const.

// // friends = ["Bob", "Alice"]; // Iligal

// // Next up, I want to show you that an Array
// // can actually hold values with different types
// // all at the same time.

// // and actually we could even put other Arrays
// // inside of an Array.
// const firstName = "Elmar";
// const elmar = [firstName, "Angao", 2037 - 1991, "teacher", friends];
// console.log(elmar);
// console.log(elmar.length);

// // Exercise
// const calAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010];

// // console.log(calAge(years)); //NAN
// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[years.length - 1]);
// console.log([age1, age2, age3]);

// // So basically we can place function calls
// // into an Array just fine,
// // because they will produce a value.
// const ages = [
//   calAge(years[0]),
//   calAge(years[2]),
//   calAge(years[years.length - 1]),
// ];
// console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
///////////////////////////////////////

const friends = ["Michael", "Steven", "Peter"];

//Add element
// push Add element to the end of array and return the lenght
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// So again push is a method which technically is a function
// and we call that function directly on the friends array.
// So the push function is kind of attached
// to the friends array and if you're wondering why that is
// we will once more learn that a little bit later

//unshift  Add element to the beginning of an array  and return the lenght
friends.unshift("John");
console.log(friends);

// pop Remove elements but did not return the array and the lenght
// pop return the remove element
friends.pop(); //remove the last element
const popped = friends.pop(); //remove the last element
console.log(popped);
console.log(friends);

// shift Remove first element from an array and return the array with the remaining element
friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); //Not in an array it will return -1

friends.push(23);
console.log(friends.includes("Steven")); // return true
console.log(friends.includes("Bob")); //Not in an array it will return false
console.log(friends.includes("23")); // return false - strict equality
console.log(friends.includes(23)); // return true

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven`);
}
