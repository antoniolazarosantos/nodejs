const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname,'templates');
const usersRouter = require('./users'); // Importa o index.js , já é uma notação padrão do Node

// ler o body 
// necessário para pegar os dados via POST

app.use(
    express.urlencoded({extended: true,})
);

app.use(express.json());

// Arquivos estáticos
app.use(express.static("public"));

app.use('/users',usersRouter); // Tem que estar acima da rota principal

// Rota principal
app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`);
});


app.listen(port,()=>{
 console.log(`App rodando na porta ${port}`);
});