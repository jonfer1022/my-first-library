"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    return b != 0 ? a / b : 'No puedes divir por 0';
};
exports.default = {
    restar,
    multiplicar,
    dividir
};
