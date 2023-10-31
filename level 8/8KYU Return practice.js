// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:

// n= 5, m=5: 25
// n=-5, m=5:  0

//my solution:

function paperwork(n,m){
    if( n < 0 || m < 0){
      return 0
    } return n * m
}paperwork(2,2) 



// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// solution

function areYouPlayingBanjo(name) {
  if(name[0] == 'R' || name[0] == "r"){
    return name + " plays banjo"
  }return name + " does not play banjo"
 }

 function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo"
}

