// Define the guest list
var guestList = ["Kamran Tessori", "Daniyal Naggori", "Sir Zia Khan"];
guestList.unshift("Imran Khan");
guestList.splice(Math.floor(guestList.length / 2), 0, "Altaf Hussain");
guestList.push("Nawaz sharif");
guestList.forEach(function (guest) {
    // Invitation message for each guest
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
    console.log("Good news! We found a bigger dinner table!");
});
