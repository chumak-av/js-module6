const array = [
    [1, 10, 15, 20],
    [20, 30, -5, 50],
    [10, -10, 3, 150]
];
let newArray = [];
let sum = 0;
const numbers = function() {
    for (let j = 0; j < array[1].length; j++) {
        if (array[1][j] > 0) {
            sum += array[1][j];
        };
    };
    newArray = [Math.min.apply(Math, array[0]), Math.max.apply(Math, array[1]), sum];
    console.log(newArray);
};
numbers();