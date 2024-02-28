// Step 1: Define the guest list
var guestList = ["Imran Khan", "Kamran Tessori", "Altaf Hussain", "Daniyal Naggori", "Sir Zia Khan", "Nawaz Sharif"];
// Step 2: Print a message indicating only two guests can be invited
console.log("Unfortunately, we can only invite two guests for dinner.");
// Step 3: Remove guests from the list one at a time until only two names remain
while (guestList.length > 2) {
    // Pop a name from the list
    var removedGuest = guestList.pop();
    // Print a message to the removed guest
    console.log("Sorry, ".concat(removedGuest, ", you're no longer invited to dinner."));
}
// Step 4: Print invitation messages to the two remaining guests
guestList.forEach(function (guest) {
    // Invitation message for each remaining guest
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
// Step 5: Remove the last two names from the list
guestList.pop();
guestList.pop();
// Step 6: Print the empty list to confirm
console.log("Guest list:", guestList); // Output: []
