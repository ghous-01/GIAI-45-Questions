function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great with a copy of the array and store the result in a new array
let great_magicians: string[] = make_great([...magicians]); // Using the spread operator to create a copy of the array

// Call show_magicians to display the original magicians array
console.log("Original Magicians:");
show_magicians(magicians);

// Call show_magicians to display the new array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
