const sumAll = function(start, end) {

    if ((start < 0 || !Number.isInteger(start)) || (end < 0 || !Number.isInteger(end))) {
        return "ERROR"
    } else if (start > end) {
        const range = Array.from({ length: start - end + 1}, (_, index) => end + index);
        const sum = range.reduce((accumulator, current) => accumulator + current, 0)
        return sum
    } else {
        const range = Array.from({ length: end - start + 1}, (_, index) => start + index);
        const sum = range.reduce((accumulator, current) => accumulator + current, 0)
        return sum
    }

};

// Do not edit below this line
module.exports = sumAll;
