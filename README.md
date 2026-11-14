# banco-practica

Banco ficticio para el taller de Claude Code. Todo es inventado: las cuentas, los nombres y las reglas de negocio. No tiene ni debe tener datos reales.

## Requisitos

- Node.js 18 o superior (`node -v`)
- Git
- Claude Code

No hay dependencias que instalar.

## Cómo se usa

```
npm test
```

Corre todas las pruebas con el ejecutor de pruebas de Node. Hoy **una prueba falla a propósito**: es el ejercicio 2.

## Qué hay

- `src/cuentas.js`: cuentas en memoria (crear, depositar, retirar).
- `src/comisiones.js`: comisión de una transferencia.
- `src/transferencias.js`: transferencia entre dos cuentas.
- `src/heredado/extracto.js`: código heredado, sin pruebas. Nadie del equipo actual lo escribió.
- `test/`: pruebas unitarias.
- `datos/cuentas-sinteticas.json`: cuentas inventadas.
- `docs/constitucion.plantilla.md`: plantilla de la constitución del proyecto.

## Reglas de negocio (inventadas para la clase)

Comisión de una transferencia:

1. Entre cuentas propias: Bs 0.
2. A otro banco: 0,5 % del monto.
3. A otro banco, mínimo Bs 5 y máximo Bs 100.
4. Monto menor o igual a cero: error.
