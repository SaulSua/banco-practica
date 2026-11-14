const { obtenerCuenta, redondear } = require("./cuentas");
const { calcularComision } = require("./comisiones");

// Mueve dinero de una cuenta a otra. La comisión la paga la cuenta de origen.
function transferir(numeroOrigen, numeroDestino, monto, tipo) {
  if (numeroOrigen === numeroDestino) throw new Error("Origen y destino son la misma cuenta");
  const origen = obtenerCuenta(numeroOrigen);
  const destino = obtenerCuenta(numeroDestino);
  const comision = calcularComision(monto, tipo);
  const total = redondear(monto + comision);
  if (origen.saldo < total) throw new Error("Saldo insuficiente");

  origen.saldo = redondear(origen.saldo - total);
  destino.saldo = redondear(destino.saldo + monto);
  return { monto, comision, total };
}

module.exports = { transferir };
