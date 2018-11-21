module.exports = function findTheLongestWord(sen) {
let longestWord = '';
let wordLength = 0;
 for (var i = 0; i < sen.length; i++){
     if (sen[i].length > wordLength) {
         wordLength = sen[i].length;
         longestWord = sen[i];
     }
 }
 return longestWord;
}