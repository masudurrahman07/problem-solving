// Problem 21: Factorial (Recursive)  [Easy]

 function factorial(n) {
    if ( n === 0){
        return 1;
    }
    return factorial(n - 1) * n;
 }

//  console.log(factorial(5)); // Output: 120

  
// Problem 22: Fibonacci Sequence  [Easy]

function fibonacci(n) {
   if (n === 0 || n === 1) { 
    return n;
   }
 let prev = 0;
 let curr = 1;

 for ( let i = 2; i <=n; i++){
    let next = prev + curr; 
    prev = curr;
    curr = next;
 }
 return curr;
}

// console.log(fibonacci(6)); // Output: 8

// Problem 23: Create a Counter with Closure  [Medium]

 function makeCounter(){
    let count = 0; 
    return {
        increment: function() {
            count++;
        },

        decrement: function() {
            count--;
        },

        getCount: function() {
            return count;
        }
    }
 }

 const c = makeCounter();c.increment(); c.increment();c.getCount();
//  console.log(c.getCount()); 

// Problem 24: Curry a Function  [Medium]

function curry(fn){

}

 