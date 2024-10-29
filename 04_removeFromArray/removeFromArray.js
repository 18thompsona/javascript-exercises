const removeFromArray = function(array, ...args) {
    let removedArray = [];

    array.forEach(element => {
        if(!args.includes(element))
            removedArray.push(element);
    });

    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
