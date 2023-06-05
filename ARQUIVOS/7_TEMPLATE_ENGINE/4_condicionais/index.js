const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Setup do handlebars ( template engine)
app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
})

// rota principal
app.get('/',(req,res) => {
    const user = {
        name:"Antonio",
        surname:"Lazaro"
    };

    const mensagem = "Seja bem vindo.";

    const auth = false;


    res.render('home',{user:user, mensagem, auth});
});

app.listen(3000,()=>{
    console.log("App funcionando");
});