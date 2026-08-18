const removeFromArray = function(array, ...items) {
    const hasil = array.filter(item => !items.includes(item));
    return hasil;
};

// Do not edit below this line
module.exports = removeFromArray;
