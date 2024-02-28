var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Array of magician's names
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great with a copy of the array and store the result in a new array
var great_magicians = make_great(__spreadArray([], magicians, true)); // Using the spread operator to create a copy of the array
// Call show_magicians to display the original magicians array
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians to display the new array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
