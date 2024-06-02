// Can you write an algorithm to determine the number of decimal places of a number?

// decimalPlaces(3.14); //yields 2
// decimalPlaces(2.e-14); //yields 14
// decimalPlaces(-3.14e-21); //yields 23
// decimalPlaces(10.75); //yields 2
// decimalPlaces(NaN); //yields 0
// decimalPlaces(Infinity); //yields 0

// Consider the decimal places to be the number of digits after the decimal separator when the number is expressed in ordinary decimal notation

// solution 

function decimalPlaces(n) {
    let r = 0, d = n
    while(d - Math.floor(d) > 0) {
        r++
        d = m * Math.pow(10, r)
    }
    return r
}