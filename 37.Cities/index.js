function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Karachi');
describe_city('Lahore');
describe_city('New York', 'USA');
//When you call describe_city('Karachi'), it will print:
//Karachi is in Pakistan.
//When you call describe_city('Lahore'), it will print:
//Lahore is in Pakistan.
//When you call describe_city('New York', 'USA'), it will print:
//New York is in USA.
