const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Setup do handlebars ( template engine)
app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

app.get('/dashboard',(req,res)=>{
    const items = [{"id":1,"descricao":"Laranja"},{"id":2,"descricao":"Melão"},{"id":3,"descricao":"Abacate"}];
    res.render('dashboard',{items});
})

app.get("/post", function (req, res) {
    const post = {
      title: "Aprender Node.js",
      category: "Node.js",
      body: "Node.js é muito utilizado na programação hoje em dia",
      comments: 4,
    };
  
    res.render("blogpost", { post });
  });

// rota principal
app.get('/',(req,res) => {
    const user = {
        name:"Antonio",
        surname:"Lazaro"
    };

    const mensagem = "Seja bem vindo.";

    const auth = true;


    res.render('home',{user:user, mensagem, auth});
});

app.listen(3000,()=>{
    console.log("App funcionando");
});