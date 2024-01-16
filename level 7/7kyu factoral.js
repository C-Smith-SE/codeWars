// Your task is to write function factorial.

// solution

function factorial(n){
    let answer = 1
    
    while (n > 0) {
      answer *= n
      n--
    }
    
    return answer
  }