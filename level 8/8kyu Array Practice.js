// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!
// Note:

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// My solution:


function betterThanAverage(classPoints,yourPoints){
    let classAverage = 0
    for(i = 0; i < classPoints.length; i++){
      classAverage += classPoints[i];
    } 
    classAverage = classAverage/classPoints.length;
    return yourPoints > classAverage
  }
  
  
// Solution with a for.each
  
  function betterThanAverage(classPoints,yourPoints){
    let classAverage = 0
    classPoints.forEach( score => classAverage += score)
  
  classAverage = classAverage/classPoints.length
  return yourPoints > classAverage
  }

//   Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// solution

function getGrade (s1, s2, s3) {
  let totalScore = s1 + s2 + s3
  let average = totalScore / 3
  if(average >= 90){
    return 'A'
  }else if( average >= 80){
    return 'B'
  }else if( average >= 70){
    return 'C'
  }else if( average >= 60){
    return 'D'
  }return 'F'
}

  