const fs = require("fs");

fs.rename("arquivo.txt","NovoArquivo.txt",(err) => {
    if(err){
    console.log(err);
    return;
    } else {
        console.log("Arquivo renomeado!");
        return;
    }
    return;
});