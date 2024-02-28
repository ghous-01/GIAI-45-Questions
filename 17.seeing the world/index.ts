// Step 1: Define the array of places to visit
let placesToVisit = ["Paris", "Tokyo", "Bora Bora", "Rome", "Santorini"];

// Step 2: Print the array in its original order
console.log("Original Order:", placesToVisit);

// Step 3: Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Step 4: Show that the array is still in its original order
console.log("Original Order:", placesToVisit);

// Step 5: Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Step 6: Show that the array is still in its original order
console.log("Original Order:", placesToVisit);

// Step 7: Reverse the order of the list
placesToVisit.reverse();

// Step 8: Print the array to show its order has changed
console.log("Reversed Order:", placesToVisit);

// Step 9: Reverse the order of the list again to get back to the original order
placesToVisit.reverse();

// Step 10: Print the list to show it's back to its original order
console.log("Original Order:", placesToVisit);

// Step 11: Sort the array in alphabetical order
placesToVisit.sort();

// Step 12: Print the array to show its order has been changed
console.log("Sorted Alphabetical Order:", placesToVisit);

// Step 13: Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Step 14: Print the array to show its order has been changed
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);
