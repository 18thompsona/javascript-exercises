const findTheOldest = function(people) {
    let oldest = 0;
    let maxAge = 0;
    let deathYear = 0
    let age = 0

    const currentdate = new Date().getFullYear()
    for(i = 0; i < people.length; i++){
        deathYear = people[i].yearOfDeath || currentdate;
        age = deathYear - people[i].yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldest = i;
        }
    }

    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
