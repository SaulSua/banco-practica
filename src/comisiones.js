// Comisión de una transferencia. Las reglas están en el README.

const PORCENTAJE_OTRO_BANCO = 0.005;
const COMISION_MINIMA = 5;
const COMISION_MAXIMA = 1000;

function calcularComision(monto, tipo) {
  if (monto <= 0) throw new Error("Monto inválido");
  if (tipo === "propia") return 0;
  if (tipo !== "otro_banco") throw new Error(`Tipo de transferencia desconocido: ${tipo}`);

  const comision = monto * PORCENTAJE_OTRO_BANCO;
  const acotada = Math.min(Math.max(comision, COMISION_MINIMA), COMISION_MAXIMA);
  return Math.round(acotada * 100) / 100;
}

module.exports = { calcularComision };
