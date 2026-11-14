const { test } = require("node:test");
const assert = require("node:assert/strict");
const { calcularComision } = require("../src/comisiones");

test("entre cuentas propias no hay comisión", () => {
  assert.equal(calcularComision(20000, "propia"), 0);
});

test("a otro banco se cobra 0,5 % del monto", () => {
  assert.equal(calcularComision(4000, "otro_banco"), 20);
});

test("a otro banco la comisión mínima es Bs 5", () => {
  assert.equal(calcularComision(200, "otro_banco"), 5);
});

test("a otro banco la comisión máxima es Bs 100", () => {
  assert.equal(calcularComision(50000, "otro_banco"), 100);
});

test("un monto menor o igual a cero da error", () => {
  assert.throws(() => calcularComision(0, "otro_banco"), /Monto inválido/);
  assert.throws(() => calcularComision(-10, "propia"), /Monto inválido/);
});
