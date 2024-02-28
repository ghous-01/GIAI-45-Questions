// Define the guest list
let guestList: string[] = ["Kamran Tessori", "Daniyal Naggori", "Sir Zia Khan"];
guestList.unshift("Imran Khan");
guestList.splice(Math.floor(guestList.length / 2), 0, "Altaf Hussain");
guestList.push("Nawaz sharif");
guestList.forEach(guest => {
    // Invitation message for each guest
    console.log(`Dear ${guest}, you are invited to dinner.`);
    console.log("Good news! We found a bigger dinner table!");
});


