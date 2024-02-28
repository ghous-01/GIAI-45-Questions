var names = ["Adnan", "Taha", "Ahmed", "Jazil"];
var greetingMessage = "Hello, would you like to join us for dinner tonight?";
names.forEach(function (name) {
    console.log("Hi ".concat(name, ", ").concat(greetingMessage));
});
