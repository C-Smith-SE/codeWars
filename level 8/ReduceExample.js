// .reduce exmaple


let nums = [42,19,77,33,57]
// acc = accumulator: c = current value.
// the first time it runs the current value is 0,
let sum = nums.reduce( (acc,c) => acc + c, 0 )