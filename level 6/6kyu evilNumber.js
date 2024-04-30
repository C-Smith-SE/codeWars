// 'Evil' numbers are non-negative numbers with even parity, that is, numbers with an even number of 1s in their binary representation. The first few evil numbers are:

// 0,3,5,6,9,10,12,15,17,18,20

// Write a function to return the nth evil number.

// input 1 returns 0
// input 2 returns 3
// input 3 returns 5
// -- etc

// The tests will include values of n up to 10^100.


// solution 

function getEvil(n) {
    let r = 2n * n - 1n
    let x
    while (true) {
      x = r.toString(2)
      if (x.split("").filter(y=>y==="1").length % 2 !== 0) {
        r--
      } else {
        return r
      }
    }
  }