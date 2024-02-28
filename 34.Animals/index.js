// Store the names of animals with a common characteristic in an array
var animals = ['dog', 'cat', 'rabbit'];
// Use a for loop to print the name of each animal
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Modify the for loop to print a statement about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Add a line at the end of your program stating what these animals have in common
console.log("Any of these animals would make a great pet!");
