const mul = function(n, m) {
    return `сумма ${n + m}, разница ${n - m}, умножение ${n * m}`;
};
const result = mul(n = Number(prompt('Введите первое число')), m = Number(prompt("Введите второе число")));
alert(result);