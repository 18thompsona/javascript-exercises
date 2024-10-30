const fibonacci = function(num) {
    
    numClean = Number(num);

    if(numClean < 0) return "OOPS";
    if(numClean == 0)return 0;
    if(numClean == 1)return 1;

    let first = 0;
    let second = 1;
    let fib = 0;

    for(i=1; i != numClean; i++){
        fib= first+second;
        first = second;
        second = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
