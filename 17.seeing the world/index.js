var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Step 1: Define the array of places to visit
var placesToVisit = ["Paris", "Tokyo", "Bora Bora", "Rome", "Santorini"];
// Step 2: Print the array in its original order
console.log("Original Order:", placesToVisit);
// Step 3: Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Step 4: Show that the array is still in its original order
console.log("Original Order:", placesToVisit);
// Step 5: Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Step 14: Print the array to show its order has been changed
console.log("Sorted Reverse Alphabetical Order:", placesToVisit);
