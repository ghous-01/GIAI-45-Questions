var transportation = ["car", "motorcycle", "bicycle", "train"];
var statements = transportation.map(function (item) { return "I would like to own a ".concat(item, "."); });
statements.forEach(function (statement) {
    console.log(statement);
});
