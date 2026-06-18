// Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.

function wordCount(sentence) {
    let words = sentence.split(' ')
    let wordMap= {};
    for (let i = 0; i < words.length; i++) {
       let word = words[i];
       if(wordMap[word]){
        wordMap[word] = wordMap[word] + 1;
       } else{
        wordMap[word] = 1;
       }
        
    }

    return wordMap;
    
} 

// console.log(wordCount('the cat sat on the mat'))

// Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.

function longestWord(sentence) {
    let word = sentence.split(' ')
    let longest = word[0];

    for (let i = 1; i < word.length; i++) {

        if( word[i].length > longest.length){
            longest = word[i];
        }
        
    }
    return longest
}

// console.log(longestWord('The quick brown fox'))