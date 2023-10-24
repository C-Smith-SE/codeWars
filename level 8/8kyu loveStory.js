// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// My solution:

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1
  }



//   one flower must be even and one flower must be off. when adding a even number to a odd number if you then % 2 the remander will always be 1