// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.

// YET TO UNDERSTAND THE LOGIC FULLY//

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {

      fn.apply(this, args);
    }, delay);
  };
}


function search(query) {
//   console.log("Searching database for:", query);
}


const debouncedSearch = debounce(search, 300);


debouncedSearch("H"); 
debouncedSearch("Hi"); 

// Output in console after 300ms: 
// "Searching database for: Hi"
// Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().

// YET TO UNDERSTAND THE LOGIC FULLY//

function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastCall < limit) {
            return;
        }

        lastCall = now;
        fn.apply(this, args);
    };
}


// TO BE CONTINUED......

