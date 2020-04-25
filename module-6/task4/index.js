const repeat = function(str, n) {
    if (str === undefined) {
        str = "";
    }
    if (n === undefined) {
        n = 2;
    }
    let row = "";
    console.log(n);
    for (let i = 0; i < n; i++) {
        row += str;
    }
    console.log(row);
};
repeat();