const { test, beforeEach } = require("node:test");
const assert = require("node:assert/strict");
const { crearCuenta, depositar, retirar, obtenerCuenta, reiniciar } = require("../src/cuentas");

beforeEach(() => reiniciar());

test("crear una cuenta deja el saldo inicial", () => {
  crearCuenta("1001", "Titular de práctica", 500);
  assert.equal(obtenerCuenta("1001").saldo, 500);
});

test("no se puede crear dos veces la misma cuenta", () => {
  crearCuenta("1001", "Titular de práctica");
  assert.throws(() => crearCuenta("1001", "Otro titular"), /ya existe/);
});

test("depositar suma al saldo", () => {
  crearCuenta("1001", "Titular de práctica", 100);
  assert.equal(depositar("1001", 50.5), 150.5);
});

test("retirar más que el saldo da error", () => {
  crearCuenta("1001", "Titular de práctica", 100);
  assert.throws(() => retirar("1001", 100.01), /Saldo insuficiente/);
});
