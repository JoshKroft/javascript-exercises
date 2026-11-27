const removeFromArray = function(arr, ...num) {
    // Take an array
    // Find the number that resides in the array
    // remove it 
    let remove = []
    remove.push(...num)
    arr = arr.filter(item => !remove.includes(item))
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
