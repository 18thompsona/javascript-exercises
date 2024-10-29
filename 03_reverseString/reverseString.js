const reverseString = function(str) {
    holder = '';
    for(i = str.length-1; i >= 0; i--)
    {
        holder = holder + str[i]
    }
    return holder;
};

// Do not edit below this line
module.exports = reverseString;
