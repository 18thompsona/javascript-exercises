const palindromes = function (word) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
    const cleanedString = word
      .toLowerCase()
      .split('')
      .filter((character) => alphanumerical.includes(character))
      .join('');

    const halfpoint = Math.floor(cleanedString.length/2);

    for(i = 0; i < halfpoint; i++){
        if(cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
