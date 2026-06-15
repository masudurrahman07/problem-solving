// Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.

const debounceFunc = (fn, delay) => {
    setTimeout(() => {
        fn()
    }, delay);
}

const fn = () => {
    // return console.log("Hello Man!")
}

const debouncedSearch = debounceFunc(fn, 300);

