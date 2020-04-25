const avg = function() {
    let i = 0;
    sum = 0;
    for (argument of arguments) {
        i++;
        sum += argument;
    }
    console.log(sum / i);
};
avg(442, 545, 663, 7277, 888, 13);