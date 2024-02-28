function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with at least three city-country pairs
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('New York', 'USA'));
//When you call city_country('Lahore', 'Pakistan'), it will return:
//"Lahore, Pakistan"
//When you call city_country('Paris', 'France'), it will return:
//"Paris, France"
//When you call city_country('New York', 'USA'), it will return
//"New York, USA"
