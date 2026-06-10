// Problem 11: Find the Sum of an Array  [Easy]

function sumArray(arr) {
    let sum =  0;
    for (let i = 0; i <arr.length; i++ ) {
        sum = sum + arr[i];
    }
    return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5])); 

// Problem 12: Find Maximum Value in Array  [Easy]
 function findMax(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }    return maxVal;
 }

// console.log(findMax([15, 22, 63, 4, 95]));

// Problem 13: Remove Duplicates from Array  [Easy]
 function removeDuplicates(arr) {
    const uniqueArr = new Set(arr);
    return [...uniqueArr];
 }

//  console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// Problem 14: Flatten a Nested Array  [Medium]

 function flattenArray(arr){
    return arr.flat();
 }

//  console.log(flattenArray([1, [2, 3], [4, 5], 6]));

// Problem 15: Chunk an Array  [Medium]
    function chunkArray(arr, size) {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }        return result;

    }

// console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));