// extracto.js  v1.3  (2011)  NO TOCAR sin avisar a sistemas
var fs = require("fs");

function genExt(c, ms, f) {
  var r = "";
  var s = 0;
  var i;
  r = r + "EXTRACTO " + c.numero + "\n";
  for (i = 0; i < ms.length; i++) {
    var m = ms[i];
    if (m.t == "D") {
      s = s + m.v;
    } else if (m.t == "R") {
      s = s - m.v;
    } else if (m.t == "C") {
      s = s - m.v;
      if (m.v > 50) { s = s - 1.5; }
    }
    if (f == 1) {
      r = r + m.f + ";" + m.t + ";" + m.v + ";" + s + "\n";
    } else {
      r = r + m.f + " " + m.t + " " + m.v.toFixed(2) + " " + s.toFixed(2) + "\n";
    }
  }
  r = r + "SALDO " + s.toFixed(2) + "\n";
  return r;
}

function guardar(c, ms, ruta) {
  var t = genExt(c, ms, 1);
  fs.writeFileSync(ruta, t);
  return 1;
}

module.exports = { genExt: genExt, guardar: guardar };
