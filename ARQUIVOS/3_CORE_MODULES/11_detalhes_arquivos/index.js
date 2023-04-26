const fs = require("fs");

fs.stat("arquivo.txt",(err,info)=>{
    if(err){
        console.log(err);
        return;
    } else {
        console.log(info);
        return;
    }
});