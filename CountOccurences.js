// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.


var str = "India is a great counctry";

var wordCount = {};

str.split(' ').map(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
});

console.log(wordCount);