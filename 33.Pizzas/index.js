// Store the names of your favorite pizzas in an array
var favoritePizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Use a for loop to print the name of each pizza
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print a sentence using the name of each pizza
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Add a line at the end of your program stating how much you like pizza
console.log("I really love pizza!");
