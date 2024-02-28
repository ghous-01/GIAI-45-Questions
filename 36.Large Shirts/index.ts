function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}".`);
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a medium shirt with the default message
make_shirt('medium');

// Call the function to make a shirt of any size with a different message
make_shirt('small', 'Hello, World!');


//When you call make_shirt() with no arguments, it will print:
//The shirt size is large and the message printed on it is: "I love TypeScript".

//When you call make_shirt('medium'), it will print:
//The shirt size is medium and the message printed on it is: "I love TypeScript".

//When you call make_shirt('small', 'Hello, World!'), it will print:
//The shirt size is small and the message printed on it is: "Hello, World!".
