// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// solution

function positiveSum(arr) {
    if(arr.length === 0){
      return 0
    }let sum = 0
    for(i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        sum += arr[i]
      }
    }return sum
  }


//   You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

function otherAngle(a, b) {
  return 180 - (a + b)
}