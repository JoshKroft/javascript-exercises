const repeatString = function(str, a) {
    let result = ""
    if (a < 0) {
        return "ERROR";
    } else {
        while (a != 0) {
            result += str;
            a--;
        }
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
