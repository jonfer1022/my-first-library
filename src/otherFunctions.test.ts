import functions from "./otherFuctions";
import { expect } from "chai";
import { describe } from "mocha";

describe(('Pruebas unitarias generales'), () => {

  it('Debe funcionar correctamente la primera prueba', () => {
    expect(true).to.be.true;
  })

  it('Probando función suma con respuesta correcta',() => {
    let numero = functions.sumar(1,2);
    expect(numero).to.equal(3);
  })
  
  it('Probando función suma con respuesta incorrecta',() => {
    let numero = functions.sumar(1,4);
    expect(numero).to.not.equal(6);
  })
  
  it('Probando función resta con respuesta correcta',() => {
    let numero = functions.restar(3,2);
    expect(numero).to.equal(1);
  })
  
  it('Probando función resta con respuesta incorrecta',() => {
    let numero = functions.restar(3,2);
    expect(numero).to.not.equal(2);
  })

  it('Probando función multiplicación con respuesta correcta',() => {
    let numero = functions.multiplicar(3,2);
    expect(numero).to.equal(6);
  })
  
  it('Probando función multiplicación con respuesta incorrecta',() => {
    let numero = functions.multiplicar(3,2);
    expect(numero).to.not.equal(4);
  })

  it('Probando función división con respuesta correcta',() => {
    let numero = functions.dividir(4,2);
    expect(numero).to.equal(2);
  })
  
  it('Probando función división con respuesta incorrecta',() => {
    let numero = functions.dividir(4,2);
    expect(numero).to.not.equal(1);
  })

  it('Probando función división con denominador 0',() => {
    let numero = functions.dividir(4,0);
    expect(numero).to.equal('No puedes divir por 0');
  })

});