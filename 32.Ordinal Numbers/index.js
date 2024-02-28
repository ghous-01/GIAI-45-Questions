"use strict";
// Store the numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (const num of numbers) {
    // Use an if-else chain to determine the proper ordinal ending for each number
    if (num === 1) {
        console.log(`${num}st`);
    }
    else if (num === 2) {
        console.log(`${num}nd`);
    }
    else if (num === 3) {
        console.log(`${num}rd`);
    }
    else {
        console.log(`${num}th`);
    }
}
