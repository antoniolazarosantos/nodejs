const fs = require("fs");

console.log("início...");
fs.writeFile("assincrono.txt","Olá método assíncrono",(err) => {
    setTimeout(() => {
        console.log("Arquivo criado!");
    }, 2000);
});
console.log("fim");