// Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9 Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.

// YET TO UNDERSTAND THE LOGiC///

function twoSum(arr, target){
    let notebook = {};

    for ( i = 0; i < arr.length; i++){
        const crr = target - arr[i];

        if (notebook.hasOwnProperty(crr)){
            return [notebook[crr], i];
        } else {
            notebook[arr[i]] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9))