// Problem 1 

function swapVariables(a, b) {
   [a, b] = [b, a];
   return [a, b];
}
 
// console.log(swapVariables(5, 10)) 


// Problem 2

function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// console.log(checkEvenOdd(7)); 

// Problem 3
 
function findLargest(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(findLargest(10, 5, 8));