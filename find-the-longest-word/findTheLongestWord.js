module.exports = function findTheLongestWord(sen) {
//define two useful variables for later
let longestWord = '';
let wordLength = 0;
//using a loop to iterate through the array
 for (var i = 0; i < sen.length; i++){
     //iterating through each to find the longest word
     if (sen[i].length > wordLength) {
         //when its found, assigning the length back to the orignal name
         wordLength = sen[i].length;
         //taking the orginal name and making it a variable so we can return it late
         longestWord = sen[i];
     }
 }
 //return to console to test
 return longestWord;
}