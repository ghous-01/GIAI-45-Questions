const transportation: string[] = ["car", "motorcycle", "bicycle", "train"];
const statements: string[] = transportation.map(item => `I would like to own a ${item}.`);
statements.forEach(statement => {
    console.log(statement);
});
