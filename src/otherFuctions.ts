const sumar = (a: number, b: number) => a + b;

const restar = (a: number, b: number) => a - b;

const multiplicar = (a: number, b: number) => a * b;

const dividir = (a: number, b: number) => {
  return b != 0 ? a / b : 'No puedes divir por 0';
}

export default {
  sumar,
  restar,
  multiplicar,
  dividir
}