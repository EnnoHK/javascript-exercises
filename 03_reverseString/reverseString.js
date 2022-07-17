
const reverseString = function (word) {
    const wrdLength = word.length;
    for (let i = wrdLength - 1; i >= 0; i--) {
        word += word.charAt(i);
    };
    word = word.slice(wrdLength);
    return word;
};

// Do not edit below this line
module.exports = reverseString;
