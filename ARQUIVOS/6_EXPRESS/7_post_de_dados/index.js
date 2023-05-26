const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname,'templates');

// ler o body 
// necessário para pegar os dados via POST

app.use(
    express.urlencoded({extended: true,})
);

app.use(express.json());

app.get('/users/add',(req,res) => {
    res.sendFile(`${basePath}/userform.html`);
});

app.post('/users/save',(req,res)=>{
    console.log(req.body);
    const nome = req.body.nome
    const idade = req.body.idade;
    console.log(`Usuário: ${nome} tem ${idade} anos.`);
    res.sendFile(`${basePath}/userform.html`); // Necessário pra não ficar em loop infinito.
});

// As rotas tem que estar acima de /

app.get('/',(req,res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    console.log(`Id: ${id}`);
    res.sendFile(`${basePath}/users.html`);
});



app.listen(port,()=>{
 console.log(`App rodando na porta ${port}`);
});