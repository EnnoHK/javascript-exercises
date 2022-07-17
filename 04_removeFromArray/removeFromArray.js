const removeFromArray = function (array, toBeRemoved) {
    const args = Array.from(arguments);
    args.shift();
    let i = 0;
    args.forEach(element => {
        const index = array.indexOf(args[i]);
        if (index > -1) {
            array.splice(index, 1);
        }
        i++;
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

/*
for  i = 0 ;toBeRemoved != array[i] ; i++

array.splice(i, i+1)

    const index = array.indexOf(toBeRemoved);
    if (index != null) {
        array.splice(index, 1);
    }
    return array;

    let rmwArr = array;
    for (let i = 0; i == array.length; i++) {
        if (array[i].toString == toBeRemoved.toString) {
            rmwArr.splice(i, i + 1);
        }
    }
    return rmwArr;

*/