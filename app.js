// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * oneEuroIs.USD * oneEuroIs.JPY;
    // return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = Math.round(valueYen / oneEuroIs.JPY * oneEuroIs.GBP);
    // return the dollar value
    return valueInPound;
}


// app.js file content
const sum = (a,b) =>{
    return a + b;
}

//console log for myself
console.log(sum(7,3)) 

//Export the function
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

