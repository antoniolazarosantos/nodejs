const inquirer = require("inquirer");

inquirer.prompt([{
  name: 'N1', message:"Digite a nota 1:"
},{
  name: 'N2', message:"Digite a nota 2:"
}]).then((respostas) =>{
  console.log("Respostas:",respostas);
  const media = ( parseFloat(respostas.N1) + parseFloat(respostas.N2) ) / 2;
  console.log("A média é:",media);
}).catch(erro => console.log(erro));