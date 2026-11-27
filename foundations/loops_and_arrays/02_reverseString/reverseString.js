const reverseString = function(str) {
    let result = []
    let i = str.length - 1
    for (i; i >= 0; i--) {
        result.push(str[i])
    }
    return result.join("")
};

// Do not edit below this line
module.exports = reverseString;
