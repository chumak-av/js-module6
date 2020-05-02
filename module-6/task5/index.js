const avg = function() {
    sum = 0;
    for (argument of arguments) {
        sum += argument;
    }
    console.log(sum / arguments.length);
};
avg(442, 545, 663, 7277, 888, 13);