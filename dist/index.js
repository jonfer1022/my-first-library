"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const otherFuctions_1 = __importDefault(require("./src/otherFuctions"));
const suma = (a, b) => {
    return a + b;
};
exports.default = {
    suma,
    restar: otherFuctions_1.default.restar,
    multiplicar: otherFuctions_1.default.multiplicar,
    dividir: otherFuctions_1.default.dividir
};
