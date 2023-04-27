const fs = require("fs");

if(!fs.existsSync("./minhapasta")){
    console.log(`Pasta ./minhapasta não existe!`);
    fs.mkdirSync("./minhapasta");
} else {
    console.log(`Pasta ./minhapasta já existe!`);
}