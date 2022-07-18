
const leapYears = function (givenYear) {
    return givenYear % 4 === 0 && (givenYear % 400 === 0 || givenYear % 100 != 0);
};

// Do not edit below this line
module.exports = leapYears;

/*

> Leap years are years divisible by four (like 1984 and 2004).
 However, years divisible by 100 are not leap years (such as 1800 and 1900)
 unless they are divisible by 400 (like 1600 and 2000, 
 which were in fact leap years). 
(Yes, it's all pretty confusing)

&& 

*/