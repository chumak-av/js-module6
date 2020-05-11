let Number2Type = 0;
let Number1Type = 0;
let stringType = 0;
let nullType = 0;
let undefinedType = 0;
let booleanType = 0;
let arrayType = 0;
const info = function() {
    const newArray = Array.from(arguments);
    console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
        switch (typeof newArray[i]) {
            case "string":
                stringType++;
                break;
            case "null":
                nullType++;
                break;
            case "boolean":
                booleanType++;
                break;
            case "undefined":
                undefinedType++;
                break;
        };
        if (Array.isArray(newArray[i]) == true) {
            arrayType++;
        } else
        if (typeof newArray[i] === typeof 0) {
            if (newArray[i] % 2 === 0) {
                Number2Type++;
            } else {
                Number1Type++;
            };
        };
    }
    console.log(`${undefinedType} - undefined, ${nullType} - null, ${arrayType} - массива, ${booleanType} - boolean, ${stringType} - строки, ${Number2Type} - четных числа, ${Number1Type} - нечетных числа`);
}
info(1, 2, 3, "jjj", [1, 2, 3], true, "gfgf", 3, [1, 2]);