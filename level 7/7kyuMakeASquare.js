// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
// Example

// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// solution



function generateShape(integer){

    //Creates a row of the array then joins it to a string
    let row = Array(integer).fill('+').join('')
    
    //Populates array with rows then joins it to a string with a newline
    let res = Array(integer).fill(row).join('\n')
  
    return res
  }