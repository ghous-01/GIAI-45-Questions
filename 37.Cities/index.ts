function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
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
