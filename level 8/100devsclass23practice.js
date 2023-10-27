// variables
// declare a variable and assign it to a sentence as a string. alert if the sentence is a question.
const str = 'Is this the best week ever?'
alert( str.endsWith('?') )

// declare a variable, assign it to a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console.

let str2 = ' I am looking for jr. dev positions.'
console.log( str2.replaceALL('jr. dev','software engineering'))

// functions
// create a function that returns rock, paper, or scissors as randomly as possible.

function rockPaperScissors(game){
    let random = Math.random()
    if( random < .33){
        return 'rock'
    }else if( random < .66){
        return 'paper'
    }else{
        return 'scissors'
    }
}


// create a function that takes in an array of numbers
// return a new array of numbers that is every original number squared
let newArr = nums => nums.map( num => num * num)
                                // num => num**2

// create a function that takes a string
// print the reverse of that string to the console

let unoReverse = str => console.log( str.split('').reverse().join('') )
                                // split turns into an array
                                // reverse reverses the array
                                // join brings them back together as a string
                                // split and join need the argument(' , _)

// create a function that takes in a string
// alert if the string is a plindrome or not

const palindromeCheck = str => alert(str === str.split('').reverse().join('') )
            //    takes in a string - alert if the string equals the  string reversed
palindromeCheck('racecar')

