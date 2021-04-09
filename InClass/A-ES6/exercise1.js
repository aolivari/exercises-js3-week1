
// Turn this function into an arrow function
const arrow = () => {
  return "es6 is awesome!";
}

//Use the es6 syntax for default parameter
function defaultParameter(name = "sam") {
  return name;
}

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2]
}
const p0 = 0
const p1 = 1
const p2 = 2
const p3 = 3
const a0 = [p0, p1]
const a1 = [p2, p3]
const a8 = [9,8,7,6,5,4,7,7,8,76,6]
const a2 = [...a0, ...a1]
console.log(combineArrays(a8, a2))

//use destructuring to return the object's cyf property
function destructuring({cyf}) {
  return cyf;
}

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return `The sum is equal to ${(a + b)}`;
}