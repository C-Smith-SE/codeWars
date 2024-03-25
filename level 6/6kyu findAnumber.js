// you should find a searched number by approximation.

// The searched number will always be between 0 and 100.

// You have to write a method, that will get only a function to compare your guess number with the searched number.
// Your method have to find the number with a precision of 5 fractional digits.
// The tolerance for the value: The difference from the searched number must be smaller than 0.00002.

// The compare-function, that your method will get as parameter, takes the guessed number as parameter and returns 0 for the correct number, -1 if your number is smaller than the searched number and 1 if your guessed number is greater than the searched number.

// Example:
// Searched number: 6

// Compare(1); -> -1
// Compare(10); -> 1
// Compare(6); -> 0

// You do not need a Compare-Call, that returns 0. If your number has a precision of 5 fractional digits, and you are sure, it is the searched number, you can return the number.

// You will always get the compare-method! So there is no need for a check for null.

// solution 

function findNumber(compare) {
    let lower = 0
    let upper =100
    let guess = 50
    while(compare(guess) !==0){
      if(compare(guess)===-1){
        lower =guess
        guess =(lower+upper)/2
      }
      if(compare(guess)===1){
        upper = guess
        guess =(lower+upper)/2
      }
    }
    return guess
  }