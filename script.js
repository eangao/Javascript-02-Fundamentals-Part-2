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

// "use strict"; //activate strict mode

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

// but there is actually a third type
// of function that was added to JavaScript in ES6
// and that's the arrow function.
// And an arrow function is simply a special form
// of function expression that is shorter
// and therefore faster to write.
// So let's actually get back this function expression

// Arrow function
const calAge3 = (birthYear) => 2037 - birthYear;
const age3 = calAge3(1991);
console.log(age3);
// So this value here will automatically be returned
// without us having to explicitly write the return keyword.

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Elmar"));
console.log(yearsUntilRetirement(1980, "Bob"));

// What type of function should I use?
// Should I use arrow functions for everything
// since they're so easy to write?
// And well, the answer is no.
// But it's also complicated.
// That's because there is another fundamental difference
// between the arrow function and more traditional functions.
// So function declarations and function expressions.
// It's the fact that arrow function
// do not get a so-called this keyword.
