
import { PI, somar } from "./matematica.js";

import saudarUsuario from "./saudacao.js";

import { formatar as enfeitarTexto } from "./utilitarios.js";



console.log("===== MATEMATICA =====");

console.log("Valor de PI:", PI);

console.log("Resultado da soma:", somar(15, 30));



console.log("\n===== SAUDACAO =====");

console.log(saudarUsuario("Sarah"));



console.log("\n===== FORMATACAO =====");

console.log(enfeitarTexto("Node.js Módulos"));
