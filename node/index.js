// Load the products.json file

const products = require("./products.json");

// Function to get the price of items in the provided object in GBP instead of pence

function getPricesInGBP(obj) {

    // Initialise a variable that will hold the answer

    let result = 0;

    // Iterate through the provided object and add the price of each item to the previously initialised variable

    for (let i = 0; i < obj.length; i++) {
        result += obj[i].price_in_pence;
    }

    // Return the result divided by 100, which will provide the total price in pounds instead of pence

    return result / 100;
}

// Function to filter objects by the provided category

function filterObjectByCategory(cat) {

    // Use the filter method of the array object to create a new array containing only the objects of the desired category

    let filteredObject = products.filter(function (item) {
        return item.category == cat;
    });

    // Return the filtered array

    return filteredObject;
}

// Function to create a comma separated list of the names in the provided object

function getAList(obj) {

    // Initialise an empty array that will contain the values of the name property of provided objects

    let list = [];

    // Iterate through the provided object and push the values of the name property into the previously initialised array

    for (let i = 0; i < obj.length; i++) {
        list.push(obj[i].name)
    }

    // Return the values inside the new array separated by commas

    return list.join(", ");
}

// --- Answers to the provided questions ---

// Question 1 - outputs "£15622.99"

console.log("£" + getPricesInGBP(products));

// Question 2 - outputs "£9149.99"

console.log("£" + (getPricesInGBP(filterObjectByCategory("Laptop")) + getPricesInGBP(filterObjectByCategory("Phone"))));

// Question 3 - outputs 2

console.log(filterObjectByCategory("Graphics Card").length);

// Question 4 - outputs "Samsung Galaxy, Google Pixel, iPhone"
console.log(getAList(filterObjectByCategory("Phone")));