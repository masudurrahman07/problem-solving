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

// console.log(twoSum([2, 7, 11, 15], 9))


 
// Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: true. Input: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }

    const sortedStr1 = str1.split('').sort().join();
    const sortedStr2 = str2.split('').sort().join();

    return sortedStr1 === sortedStr2
}

// console.log(isAnagram ('listen', 'silent'))

 
// Problem 43: Find Missing Number  [Easy]
// Description: Given an array of n-1 integers from 1 to n with one number missing, write a function findMissing(arr, n) to find the missing number.
// Example:
// Input: [1,2,4,5], n=5  → Output: 3
// Hint: Use the formula: expected sum = n*(n+1)/2, then subtract actual sum.

// YET TO UNDERSTAND THE LOGIC//

function findMissing(arr, n) {
  const sum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    // const element = arr[i ];
    actualSum += arr[i];
  }
  //   for (let number of arr) {
  //     actualSum += number;
  //   }
  return sum - actualSum;
}
console.log(findMissing([1, 2, 4, 5], 5));