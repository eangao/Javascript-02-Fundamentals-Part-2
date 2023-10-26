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

// const friends = ["Michael", "Steven", "Peter"];

// //Add element
// // push Add element to the end of array and return the lenght
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // So again push is a method which technically is a function
// // and we call that function directly on the friends array.
// // So the push function is kind of attached
// // to the friends array and if you're wondering why that is
// // we will once more learn that a little bit later

// //unshift  Add element to the beginning of an array  and return the lenght
// friends.unshift("John");
// console.log(friends);

// // pop Remove elements but did not return the array and the lenght
// // pop return the remove element
// friends.pop(); //remove the last element
// const popped = friends.pop(); //remove the last element
// console.log(popped);
// console.log(friends);

// // shift Remove first element from an array and return the array with the remaining element
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); //Not in an array it will return -1

// friends.push(23);
// console.log(friends.includes("Steven")); // return true
// console.log(friends.includes("Bob")); //Not in an array it will return false
// console.log(friends.includes("23")); // return false - strict equality
// console.log(friends.includes(23)); // return true

// if (friends.includes("Steven")) {
//   console.log(`You have a friend called Steven`);
// }

///////////////////////////////////////
// JavaScript Fundamentals – Part 2
// Coding Exercise 6: CHALLENGE #2
///////////////////////////////////////
// // Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// // the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// // 20%.

// // Your tasks:
// // 1. Write a function 'calcTip' that takes any bill value as an input and returns
// // the corresponding tip, calculated based on the rules above (you can check out
// // the code from first tip calculator challenge if you need to). Use the function
// // type you like the most. Test the function using a bill value of 100
// // 2. And now let's use arrays! So create an array 'bills' containing the test data
// // below
// // 3. Create an array 'tips' containing the tip value for each bill, calculated from
// // the function you created before
// // 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// // Test data: 125, 555 and 44

// // Hint: Remember that an array needs a value in each position, and that value can
// // actually be the returned value of a function! So you can just call a function as array
// // values (so don't store the tip values in separate variables first, but right in the new
// // array) �
// // GOOD LUCK �

// // Using arrow function
// // const calcTip = (bill) =>
// //   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

///////////////////////////////////////
// Introduction to Objects
///////////////////////////////////////

// //Array
// const elmarArray = [
//   "Elmar",
//   "Angao",
//   2037 - 1985,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // So there are multiple ways of creating objects.
// // But again, using the curly braces like this
// // is the easiest one,
// // because we are literally writing down
// // the entire object content.

// //Object
// const elmarObject = {
//   firstName: "Elmar",
//   lastName: "Angao",
//   age: 2037 - 1985,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// // Key also called properties

// // recap
// // So to recap, just like arrays,
// // we use objects to essentially group together
// // different variables that really belong together
// // such as the properties of Jonas
// // that we've been working with.
// // Now, the big difference between objects and arrays,
// // is that in objects, the order of these values
// // does not matter at all when we want to retrieve them.
// // And that's important to keep in mind.

// // So in arrays,
// // the order in which we specify the elements matters a lot
// // because that's how we access these elements, right?
// // So we can only access array elements
// // using their order number.
// // This means that we should use arrays for more order data,
// // and objects for more unstructured data.
// // And data that we actually want to name,
// // and then retrieve from the object,
// // based on that name.

///////////////////////////////////////
// Dot vs. Bracket Notation
///////////////////////////////////////
// //Object
// const elmarObject = {
//   firstName: "Elmar",
//   lastName: "Angao",
//   age: 2037 - 1985,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(elmarObject);

// console.log(elmarObject.lastName); //dot notation

// console.log(elmarObject["lastName"]); // Bracket notation

// // Bracket we can put any expresion
// const nameKey = "Name";
// console.log(elmarObject["first" + nameKey]);
// console.log(elmarObject["last" + nameKey]);

// // console.log(elmarObject."last" + nameKey);  //won't work

// // So in what situations should we use the dot notation
// // and when do we have to use deep brackets notation?
// // And I kind of already replied to that,
// // but this is just to recap.
// // So when we need to first compute the property name,
// // like we did here with the first and last name,
// // then of course we have to use the bracket notation
// // in any other case, just use the dot notation,
// // which looks a lot cleaner and it's also easier to use, okay.
// // And now to make the need for the bracket notation
// // even more clear, let me show you another example,
// // which I think is gonna be really fun.
// // So let's say that we don't know yet
// // which property we want to show,
// // and instead we get this information
// // from some user interface
// // so, for that we can use the prompt function.
// // Remember, so we can us

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(elmarObject.interestedIn); //undefined
// console.log(elmarObject[interestedIn]);

// // And so let me tell you now that undefined is what we get
// // when we try to access a property
// // on an object that does not exist.

// if (elmarObject[interestedIn]) {
//   console.log(elmarObject[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, LastName, age, job, and friends"
//   );
// }

// // add properties in object
// elmarObject.location = "Philippines";
// elmarObject["twitter"] = "@elmar";
// console.log(elmarObject);

// // CHALLENGES
// // "Elmar has 3 friends, and his best friend is called Michael"
// console.log(
//   elmarObject.firstName +
//     " has " +
//     elmarObject.friends.length +
//     " friends, and his best friend is called " +
//     elmarObject.friends[0]
// );

// console.log(
//   `${elmarObject.firstName} has ${elmarObject.friends.length} friends, and his best friend is called ${elmarObject.friends[0]}`
// );

/////////////////////////////////////////////////
// Object Methods
/////////////////////////////////////////////////

// // //Object
// const elmarObject = {
//   firstName: "Elmar",
//   lastName: "Angao",
//   birthYear: 1985,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // And for that again, we will use the this keyword.
//   // So the this key word
//   // or the this variable is basically equal to the object
//   // on which the method is called,
//   // or in other words,
//   // it is equal to the object calling the method.

//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // },

//   // we can now use the this keyword
//   // also to store a new property.
//   // So, we can say this.age is equal to this here.
//   // So we calculate the age,
//   // and then we create a new property on the current object.
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${
//       this.firstName
//     } is a ${this.calcAge()}-year old teacher, and he has ${
//       this.hasDriverLicense ? "a" : "no"
//     } driver's license`;
//   },
// };

// // And so that's why it was very important
// // that you understood what a function expression actually is
// // because here we need to function expression
// // to create this method.
// // And that's what this function is called.
// // So any function that is attached
// // to an object is called a method.

// // So if you can think of functions as simply being values
// // then you can see that a method is actually also a property.
// // It just happens to be a property
// // that holds a function value.

// // console.log(elmarObject.calcAge(1991));
// // console.log(elmarObject["calcAge"](1992));

// console.log(elmarObject.calcAge());

// console.log(elmarObject.age);
// console.log(elmarObject.age);
// console.log(elmarObject.age);

// // CHALLENGE
// // "Elmar is a 46-year old teacher, and he has a driver's license"
// console.log(elmarObject.getSummary());

// // that arrays are actually also objects,
// // they are just a special kind of object.
// // And so they have functions, or in other words
// // they have methods that we can use to manipulate them
// // like push, pop, shift and unshift and many more.
// // All right? So in this lecture,
// // we created our own methods on our own objects.
// // But here we basically used built in methods on a race.
// // And so once again that means
// // that the race are actually also objects,
// // that's why they can have methods as well.

///////////////////////////////////////////////////////
// JavaScript Fundamentals – Part 2
// Coding Exercise 7: CHALLENGE #3
///////////////////////////////////////////////////////

// // Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// // implement the calculations! Remember: BMI = mass / height ** 2 = mass
// // / (height * height) (mass in kg and height in meter)

// // Your tasks:
// // 1. For each of them, create an object with properties for their full name, mass, and
// // height (Mark Miller and John Smith)
// // 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// // method on both objects). Store the BMI value to a property, and also return it
// // from the method
// // 3. Log to the console who has the higher BMI, together with the full name and the
// // respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// // Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// // tall.

// // GOOD LUCK �

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// // console.log(
// //   `${john.fullName}'s BMI (${john.calcBMI()}) is ${
// //     john.calcBMI() > mark.calcBMI() ? "higher than" : "lower than"
// //   } ${mark.fullName}'s (${mark.calcBMI()})!`
// // );

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBMI()})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBMI()})!`
//   );
// }

////////////////////////////////////////////
// Iteration: The for Loop
////////////////////////////////////////////

// // console.log("Lifting weights repitation 1");
// // console.log("Lifting weights repitation 2");
// // console.log("Lifting weights repitation 3");
// // console.log("Lifting weights repitation 4");
// // console.log("Lifting weights repitation 5");
// // console.log("Lifting weights repitation 6");
// // console.log("Lifting weights repitation 7");
// // console.log("Lifting weights repitation 8");
// // console.log("Lifting weights repitation 9");
// // console.log("Lifting weights repitation 10");

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitation ${rep} `);
// }

/////////////////////////////////////////////////
// Looping Arrays, Breaking and Continuing
/////////////////////////////////////////////////

const elmarArray = [
  "Elmar",
  "Angao",
  2037 - 1985,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const type = [];

for (let i = 0; i < elmarArray.length; i++) {
  // reading from elmar array
  console.log(elmarArray[i], typeof elmarArray[i]);

  // filling types array  //
  // type[i] = typeof elmarArray[i];
  type.push(typeof elmarArray[i]);
}

console.log(type);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break

// So continue is to exit the current iteration of the loop
// and continue to the next one.
// On the other hand, break is used
// to completely terminate the whole loop.

console.log("------------ONLY STRINGS");
for (let i = 0; i < elmarArray.length; i++) {
  if (typeof elmarArray[i] !== "string") continue;

  console.log(elmarArray[i], typeof elmarArray[i]);
}

// // break
// And now finally, let me just show you how break works.
// And remember that what break does
// is to completely terminate the whole loop.
console.log("------------ONLY NUMBER");
for (let i = 0; i < elmarArray.length; i++) {
  if (typeof elmarArray[i] === "number") break;

  console.log(elmarArray[i], typeof elmarArray[i]);
}
