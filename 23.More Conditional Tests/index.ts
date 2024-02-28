let string1: string = 'hello';
let string2: string = 'world';
let num1: number = 5;
let num2: number = 10;
let array: number[] = [1, 2, 3, 4, 5];

// Equality and inequality with strings
console.log("Is string1 == 'hello'? I predict True.");
console.log(string1 == 'hello');
console.log("Is string2 != 'world'? I predict False.");
console.log(string2 != 'world');

// Tests using the lower case function
console.log("Is string1.toLowerCase() == 'hello'? I predict True.");
console.log(string1.toLowerCase() == 'hello');

// Numerical tests
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2);
console.log("Is num1 >= num2? I predict False.");
console.log(num1 >= num2);

// Tests using "and" and "or" operators
console.log("Is num1 < 10 and num2 > 5? I predict True.");
console.log(num1 < 10 && num2 > 5);
console.log("Is num1 < 3 or num2 > 15? I predict False.");
console.log(num1 < 3 || num2 > 15);

// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
