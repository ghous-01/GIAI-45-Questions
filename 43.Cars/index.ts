function carInfo(manufacturer: string, model: string, ...options: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional key-value pairs
let myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the Object returned by the function
console.log(myCar);
