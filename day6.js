// Problem 26: Destructure and Rename  [Easy]

const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
 const { firstName: name, lastName, age } = user;

// console.log(`name='${name}', lastName='${lastName}', age=${age}`);

 
// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

function mergeArrays(...arrays) {
     return arrays.flat();
}


const merged = mergeArrays([1, 2], [3, 4], [5]);
// console.log(merged); 