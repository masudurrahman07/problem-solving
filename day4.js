// Problem 16: Count Object Properties  [Easy]

function countProperties(obj)  {
    return Object.keys(obj).length;
}

// console.log(countProperties({ a: 1, b: 2, c: 3 })); 

// Problem 17: Merge Two Objects  [Easy]

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

// Problem 18: FizzBuzz  [Easy]

 function fizzBuzz(n){
    for ( let i = 1; i <=n ; i ++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
 }

//  fizzBuzz(15);


// Problem 19: Invert an Object  [Easy]

function invertObject(obj) {
    let inverted ={};
    for ( let key in obj){
        let value = obj[key];
        inverted[value]=key;
    }
    return inverted;    
}

// console.log(invertObject({ a: 1, b: 2, c: 3 }));

// Problem 20: Find Duplicate Values in Array of Objects  [Medium]

 function findDuplicateNames(arr) {
    let counts = {};
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name;
        
        if (counts[name]) {
            counts[name] += 1; 
        } else {
            counts[name] = 1;  
        }
    }

   
    for (let name in counts) {
        if (counts[name] > 1) {
            duplicates.push(name);
        }
    }

    return duplicates;
 }

 
const users = [{name: 'Ali'}, {name: 'Sara'}, {name: 'Ali'}];
// console.log(findDuplicateNames(users)); 