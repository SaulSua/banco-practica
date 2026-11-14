// Cuentas en memoria. Los montos se manejan en bolivianos con dos decimales.

const cuentas = new Map();

function redondear(monto) {
  return Math.round(monto * 100) / 100;
}

function crearCuenta(numero, titular, saldoInicial = 0) {
  if (cuentas.has(numero)) throw new Error(`La cuenta ${numero} ya existe`);
  if (saldoInicial < 0) throw new Error("El saldo inicial no puede ser negativo");
  const cuenta = { numero, titular, saldo: redondear(saldoInicial) };
  cuentas.set(numero, cuenta);
  return cuenta;
}

function obtenerCuenta(numero) {
  const cuenta = cuentas.get(numero);
  if (!cuenta) throw new Error(`La cuenta ${numero} no existe`);
  return cuenta;
}

function depositar(numero, monto) {
  if (monto <= 0) throw new Error("Monto inválido");
  const cuenta = obtenerCuenta(numero);
  cuenta.saldo = redondear(cuenta.saldo + monto);
  return cuenta.saldo;
}

function retirar(numero, monto) {
  if (monto <= 0) throw new Error("Monto inválido");
  const cuenta = obtenerCuenta(numero);
  if (cuenta.saldo < monto) throw new Error("Saldo insuficiente");
  cuenta.saldo = redondear(cuenta.saldo - monto);
  return cuenta.saldo;
}

// Solo para las pruebas: deja el banco vacío.
function reiniciar() {
  cuentas.clear();
}

module.exports = { crearCuenta, obtenerCuenta, depositar, retirar, reiniciar, redondear };
