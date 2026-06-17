// Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.

function safeJsonParse(str){
    try {
        return JSON.parse(str)
    }
    catch (error){
        return null;
    }
}

const test = safeJsonParse('{"a":1}')
// console.log(test)



// Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

// YET TO UNDERSTAND LOGIC//

 async function retry(fn, times) {
    for (let i = 0; i<times; i++){
        try{
            return await fn();
        } catch (error) {
            if  (i === times -1){
                throw error;
            }
        }
    }
 }
 
async function retry(fn, times) {
    for (let i = 0; i<times; i++){
        try{
            return await fn();
        } catch (error) {
            if  (i === times -1){
                throw error;
            }
        }
    }
 }
 
 let count = 0;

async function unstableFetch() {
  count++;

  if (count < 3) {
    throw new Error("Failed!");
  }

  return "Success!";
}

retry(unstableFetch, 3)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));