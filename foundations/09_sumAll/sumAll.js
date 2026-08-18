const sumAll = function(a, b) {
    if(!Number.isInteger(a) || a <= 0) {
        return "ERROR";
    } else if (!Number.isInteger(b) || b <= 0) {
        return "ERROR";
    }

    let terkecil = Math.min(a, b);
    let terbesar = Math.max(a, b);
    let result = 0;
    for (let i = terkecil; i <= terbesar; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
