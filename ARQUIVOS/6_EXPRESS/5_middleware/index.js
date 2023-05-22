const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname,'templates');

const checkAuth = (req,res,next) => {
    req.authStatus = true;
    if(req.authStatus){
        console.log("Está logado, pode continuar.");
        next();
    } else {
        console.log("Usuário não autenticado. Faça o login!");
        next(); // Para prosseguir
    }
}

app.use(checkAuth);

app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.get('/teste',(req,res) => {
    res.send("Olá teste!");
});

app.listen(port,()=>{
 console.log(`App rodando na porta ${port}`);
});