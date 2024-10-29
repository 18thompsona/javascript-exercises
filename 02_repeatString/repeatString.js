const repeatString = function(str, numRepeat) {
    let holder = '';
    if(numRepeat < 0)
    {
        return "ERROR";
    }
    for (let i = 0; i < numRepeat; i++) {
        holder = holder + str;
    }
    return holder;
};

// Do not edit below this line
module.exports = repeatString;
