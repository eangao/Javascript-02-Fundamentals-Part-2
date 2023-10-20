///////////////////////////////////////
// Activating Strict Mode
///////////////////////////////////////

// So strict mode is a special mode
// that we can activate in JavaScript,
// which makes it easier for us
// to write a secure JavaScript code.
// And all we have to do to activate strict mode
// is to write this ring at the beginning of the script
// so use strict and that's it.

"use strict"; //activate strict mode

// So basically it helps us introduce the bugs into our code
// and that's because of 2 reasons.

// First, strict mode forbids us to do certain things
// and second, it will actually create visible errors for us
// in certain situations in which without strict mode
// JavaScript will simply fail silently
// without letting us know that we did a mistake.
// Okay.
// So again, first strict mode forbids us to do certain things

// and second it creates visible errors
// and the developer console, where in other situations
// JavaScript would just fail silently.
// Okay, but now to make this a bit more clear,

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;
// const if = 2;
