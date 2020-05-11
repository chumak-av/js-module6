const filterOnlyFullString = function(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === typeof 'a' && array[i] != "") {
            result.push(array[i]);
        };
    };
    return result;
};
console.log(filter(['Potato', 12312, 'Banana', true, undefined, '', 'Cake', 12312, Infinity]));