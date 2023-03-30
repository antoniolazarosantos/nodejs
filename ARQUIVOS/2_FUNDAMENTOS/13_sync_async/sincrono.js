const fs = require("fs");

console.log("início...");
fs.writeFileSync("sincrono.txt","Olá método síncrono");
console.log("fim");
