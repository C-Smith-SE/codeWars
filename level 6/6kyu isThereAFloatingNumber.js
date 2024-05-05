// Task

// You will be given input data n. Determine whether it is/contains a floating number. Return true or false.

// A valid n can be a number, a string, an array, or an object. If n is other data type, should return false.

//     If n is a number, determine whether it is a floating number.

//     If n is a string, determine whether it can be converted to a floating number.

//     If n is an array, determine whether it contains at least one element is/can be converted to a floating number.

//     If n is an object, determine whether it contains at least one value is/can be converted to a floating number.

//     Arrays and objects are allowed to be nested and mixed.

//     Examples

// isFloat(1) === false
// isFloat(1.1) === true

// isFloat("1") === false
// isFloat("1.1") === true

// isFloat([1]) === false
// isFloat([1.1]) === true
// isFloat([[[1.1]],1]) === true

// isFloat({a:1}) === false
// isFloat({a:1.1}) === true
// isFloat({a:[1]}) === false
// isFloat({a:[1.1]}) === true
// isFloat({a:["1"]}) === false
// isFloat({a:["1.1"]}) === true

// isFloat({a:[{b:[[1.1]]},1]}) === true
// isFloat({ a: [ 1, 2, { b: "3.14" } ] }) === true

// isFloat(null) === false
// isFloat(true) === false
// isFloat(undefined) === false
// isFloat(x=>1.1) === false
// isFloat(/1.1/) === false


// solution 

function isFloat(n) {
    switch (typeof n) {
      case 'number':
        return !Number.isInteger(n)
      case 'string':
        return /^\s*-?\d*\.\d+\s*$/.test(n) && !Number.isInteger(parseFloat(n))
      case 'object':
        return (n !== null) && Object.keys(n).some(k => isFloat(n[k]))
      default:
        return false
    }
  }



  function isFloat(n){
    if (typeof n === 'number') {
      return !Number.isNaN(n) && n%1 !== 0
    }
    if (typeof n === 'string') {
      return isFloat(+n)
    }
    
    if (Array.isArray(n)) {
      return n.some(isFloat)
    }
    
    if (n && typeof n === 'object') {
      return Object.values(n).some(isFloat)
    }
    return false
  }