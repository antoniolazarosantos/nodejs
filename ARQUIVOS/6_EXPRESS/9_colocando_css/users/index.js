// Rotas
const express = require('express');
const router = express.Router();

const path = require('path');
const basePath = path.join(__dirname,'../templates');

router.get('/add',(req,res) => {
    res.sendFile(`${basePath}/userform.html`);
});

router.post('/save',(req,res)=>{
    console.log(req.body);
    const nome = req.body.nome
    const idade = req.body.idade;
    console.log(`Usuário: ${nome} tem ${idade} anos.`);
    res.sendFile(`${basePath}/userform.html`); // Necessário pra não ficar em loop infinito.
});

router.get('/:id',(req,res) => {
    const id = req.params.id;
    console.log(`Id: ${id}`);
    res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
