// Módulos externos
const inquirer = require("inquirer");
const chalk = require("chalk");
// Módulos internos
const fs = require("fs");

console.log("Iniciamos o Accounts");

const operation = () => {
    inquirer.prompt([{
        type:'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices:[
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }]).then((answer) => {
        const action = answer['action'];
        if(action === 'Criar Conta' ){
            createAccount();
        }
        console.log(action);

    }).catch((err) => console.log(err));
};


operation();

// create an account
const createAccount = () => {
  console.log(chalk.bgGreen.black("Parabéns por utilizar nosso banco!"));
  console.log(chalk.bgGreen.black("Defina as opções da sua conta a seguir"));
  buildAccount();
};

const buildAccount = () => {
    inquirer.prompt([{
        name:"accountName",
        message:"Digite um nome para a sua conta:"
    }]).then(
        (answer) =>{
            console.log(answer);
        }
    ).catch((err) => console.log(err));
}
