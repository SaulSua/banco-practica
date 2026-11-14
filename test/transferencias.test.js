const { test, beforeEach } = require("node:test");
const assert = require("node:assert/strict");
const { crearCuenta, obtenerCuenta, reiniciar } = require("../src/cuentas");
const { transferir } = require("../src/transferencias");

beforeEach(() => {
  reiniciar();
  crearCuenta("1001", "Titular de práctica A", 10000);
  crearCuenta("1002", "Titular de práctica B", 0);
});

test("una transferencia entre cuentas propias no cobra comisión", () => {
  const resultado = transferir("1001", "1002", 1000, "propia");
  assert.deepEqual(resultado, { monto: 1000, comision: 0, total: 1000 });
  assert.equal(obtenerCuenta("1001").saldo, 9000);
  assert.equal(obtenerCuenta("1002").saldo, 1000);
});

test("una transferencia a otro banco descuenta monto y comisión del origen", () => {
  transferir("1001", "1002", 4000, "otro_banco");
  assert.equal(obtenerCuenta("1001").saldo, 5980);
  assert.equal(obtenerCuenta("1002").saldo, 4000);
});

test("sin saldo para monto más comisión, la transferencia no se hace", () => {
  assert.throws(() => transferir("1001", "1002", 10000, "otro_banco"), /Saldo insuficiente/);
  assert.equal(obtenerCuenta("1001").saldo, 10000);
});
