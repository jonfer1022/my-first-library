"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const otherFuctions_1 = __importDefault(require("./otherFuctions"));
const chai_1 = require("chai");
const mocha_1 = require("mocha");
(0, mocha_1.describe)(('Pruebas unitarias generales'), () => {
    it('Debe funcionar correctamente la primera prueba', () => {
        (0, chai_1.expect)(true).to.be.true;
    });
    it('Probando función suma con respuesta correcta', () => {
        let numero = otherFuctions_1.default.sumar(1, 2);
        (0, chai_1.expect)(numero).to.equal(3);
    });
    it('Probando función suma con respuesta incorrecta', () => {
        let numero = otherFuctions_1.default.sumar(1, 4);
        (0, chai_1.expect)(numero).to.not.equal(6);
    });
    it('Probando función resta con respuesta correcta', () => {
        let numero = otherFuctions_1.default.restar(3, 2);
        (0, chai_1.expect)(numero).to.equal(1);
    });
    it('Probando función resta con respuesta incorrecta', () => {
        let numero = otherFuctions_1.default.restar(3, 2);
        (0, chai_1.expect)(numero).to.not.equal(2);
    });
    it('Probando función multiplicación con respuesta correcta', () => {
        let numero = otherFuctions_1.default.multiplicar(3, 2);
        (0, chai_1.expect)(numero).to.equal(6);
    });
    it('Probando función multiplicación con respuesta incorrecta', () => {
        let numero = otherFuctions_1.default.multiplicar(3, 2);
        (0, chai_1.expect)(numero).to.not.equal(4);
    });
    it('Probando función división con respuesta correcta', () => {
        let numero = otherFuctions_1.default.dividir(4, 2);
        (0, chai_1.expect)(numero).to.equal(2);
    });
    it('Probando función división con respuesta incorrecta', () => {
        let numero = otherFuctions_1.default.dividir(4, 2);
        (0, chai_1.expect)(numero).to.not.equal(1);
    });
});
