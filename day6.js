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

// Problem 28: Promise Chain  [Medium]
// Description: Write a function delay(ms) that returns a Promise that resolves after ms milliseconds. Then chain two delays: first 1 second, then 2 seconds, logging a message after each.
// Example:
// delay(1000).then(() => { console.log('1 sec'); return delay(2000); }).then(() => console.log('3 sec total'));
// Hint: Use new Promise with setTimeout inside.

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
// delay(1000).then(() => {
//     console.log('1 sec');
//     return delay(2000);
// }).then(() => console.log('3 sec total')); 


// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout. 

// YET TO UNDERSTAND FULLY ///
async function getUserData(id) { 
     await new Promise(resolve => setTimeout(() => resolve({id, name: 'Test User'}), 500)); 
     return {id, name: 'Test User'};
}

// await getUserData(1).then(data => console.log(data));