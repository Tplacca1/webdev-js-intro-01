"use strict";

// Create some const variables
const favoriteBook = "To Kill a Mockingbird";
console.log(favoriteBook); // Output: To Kill a Mockingbird

// Trying to reassign a new value to the constant variable (will cause an error)
try {
    favoriteBook = "1984";
} catch (error) {
    console.error("Error trying to reassign a constant:", error.message);
}

// Create some let variables
let favoriteActivity = "reading";
console.log(favoriteActivity); // Output: reading

// Reassigning a new value to the let variable
favoriteActivity = "hiking";
console.log(favoriteActivity); // Output: hiking

// Additional let variable example
let currentMood = "happy";
console.log(currentMood); // Output: happy

// Reassigning a new value to the let variable
currentMood = "excited";
console.log(currentMood); // Output: excited

// Commenting out the code using multi-line comments
/*
const one = 1;
console.log(one);

let bestFriend = "Joe";
console.log(bestFriend);

bestFriend = "Susan";
console.log(bestFriend);
*/

// Single-line comments
// console.log("This line is commented out and won't be executed.");
