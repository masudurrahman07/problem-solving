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

// console.log(findLargest(10, 5, 8));

// Problem 4

function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// console.log(toFahrenheit(0)); 

// Problem 5

 function checkSign(n) {
    if (n> 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
 }

//  console.log(checkSign(-5));

// Problem 6

function reverseString(str) {
    return str.split('').reverse().join('');
}

//  console.log(reverseString("Programming"));

// Problem 7

 function countVowels(str){
    const vowels = 'aeiouAEIOU';
    let count = 0; 
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }   }
    return count;
 }

//  console.log(countVowels("Hello World"));