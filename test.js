//Import the function
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

//start test
test("La suma de 14 + 9 es igual a 23", () =>{
    //Dentro del test llamamos la funcion suma con dos números 
    let total = sum(14, 9);
    //Esperamos que el resultado sea 23
    expect(total).toBe(23);

})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Yen should be 167.455 dollars", function() {

    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3.5);
    const expected = 3.5 * 1.07 * 156.5; 
    expect(fromDollarToYen(3.5)).toBe(586.0925); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Pound should be 179 Yen", function() {

    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(179);
    const expected = Math.round(179 / (156.5 * 0.87)); 
    expect(fromYenToPound(179)).toBe(1); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})