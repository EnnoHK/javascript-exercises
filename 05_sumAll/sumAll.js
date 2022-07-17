const sumAll = function (uno, dos) {

    let result = 0;
    let min = 0;
    let max = 0;
    if (uno < dos) {
        min = uno;
        max = dos;
    } else {
        min = dos;
        max = uno;
    }
    if (min > 0 && max > 0 && typeof min == 'number' && typeof max == 'number') {
        for (min; min <= max; min++) {

            result += min;
        }
    } else {
        result = "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

/*

Implement a function that takes 2 integers and returns 
the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10



*/