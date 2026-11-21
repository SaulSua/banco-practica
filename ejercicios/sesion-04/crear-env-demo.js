// Crea (o borra) un .env FALSO en la raíz del repositorio, solo para la práctica del guardián.
// Todos los valores son inventados. El .env está en .gitignore: no se sube a Git.
// Uso:  node ejercicios/sesion-04/crear-env-demo.js            crea el .env
//       node ejercicios/sesion-04/crear-env-demo.js --borrar   lo borra
const fs = require("fs");
const path = require("path");

const destino = path.join(__dirname, "..", "..", ".env");

if (process.argv.includes("--borrar")) {
  if (fs.existsSync(destino)) {
    fs.unlinkSync(destino);
    console.log("Borré .env");
  } else {
    console.log("No había .env");
  }
  process.exit(0);
}

const contenido = [
  "# FALSO: solo para la práctica del taller",
  "DB_PASSWORD=clave-falsa-de-practica",
  "TOKEN_API=token-falso-0000",
  "",
].join("\n");

fs.writeFileSync(destino, contenido, "utf8");
console.log("Creé .env falso en " + destino);
