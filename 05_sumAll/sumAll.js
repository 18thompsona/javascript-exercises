const sumAll = function(lowNum, highNum) {
    if(lowNum < 0 || highNum < 0)
    {
        return 'ERROR'
    }
    if(!Number.isInteger(lowNum) || !Number.isInteger(highNum))
    {
        return 'ERROR'
    }
    
    let totalSum = 0;
    low = Math.min(lowNum, highNum);
    high = Math.max(lowNum, highNum)

    for(i = low; i <= high; i++)
    {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
