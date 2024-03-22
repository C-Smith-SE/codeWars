// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"


// solution 

// Return the same string, but with spaces between characters
function spacify(str) {
    return str.split("").join(" ")
  }