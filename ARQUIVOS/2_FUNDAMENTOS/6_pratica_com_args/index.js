// node index.js --a=15 --b=20
// Módulo Externo
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

// Módulo Interno

const soma = require('./soma').soma;

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

soma(a,b);


