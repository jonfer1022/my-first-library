import functions from "./src/otherFuctions";

const suma = (a: number, b: number) => {
  return a + b
}

export default {
  suma,
  multiplicar: functions.multiplicar,
  dividir: functions.dividir
}