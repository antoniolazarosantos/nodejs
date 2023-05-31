const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//Setup do handlebars ( template engine)
app.engine('handlebars',exphbs.engine());
app.set('view engine','handlebars');

// rota principal
app.get('/',(req,res) => {
    res.render('home');
});

app.listen(3000,()=>{
    console.log("App funcionando");
});