function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
var magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call make_great to modify the array
make_great(magicians);
// Call the function to show the modified magicians
show_magicians(magicians);
