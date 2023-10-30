// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4



// My Solution:

function points(games){
    let totalPoints = 0
  
    for(i = 0; i < games.length; i++){
      let xScore = Number(games[i].charAt(0))
      let yScore = Number(games[i].charAt(2))
      if( xScore > yScore){
        totalPoints += 3
        }
      if( xScore === yScore){
          totalPoints +=1
        }
      }return totalPoints
    }
 
    
//     Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0

// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// solution 

function strCount(str, letter){
  let count = 0
  for(i = 0; i < str.length; i++){
    if(str[i] == letter){
      count++
    }
  }return count
}

