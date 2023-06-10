const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Setup do handlebars ( template engine)
const hbs = exphbs.create({
    partialsDir: ["views/partials/"],
  });

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.static('public'));


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

  app.get("/blog", function (req, res) {
    const posts = [
      {
        title: "Aprender Node.js",
        category: "Node.js",
        body: "Node.js é muito utilizado na programação hoje em dia",
        comments: 4,
      },
      {
        title: "PHP ainda vale a pena?",
        category: "PHP",
        body: "",
        comments: 12,
      },
      {
        title: "Os segredos de JavaScript",
        category: "JavaScript",
        body: "",
        comments: 5,
      },
    ];
  
    res.render("blog", { posts });
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