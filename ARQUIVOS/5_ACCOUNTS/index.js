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
            const accountName = answer['accountName']
            console.info(accountName);
            if(!fs.existsSync("accounts")){
                fs.mkdirSync("accounts");
            }
            if(fs.existsSync(`accounts/${accountName}.json`)){
                console.log(chalk.bgRed.black("Esta conta já existe. Escolha outro nome!"));
                buildAccount();
                return;
            }
            fs.writeFileSync(`accounts/${accountName}.json`,'{"balance":0}',(erro)=>{
                console.log(erro);
            });
            console.log(chalk.green("Parabéns, sua conta foi criada!"));
            operation();            
        }).catch((err) => console.log(err));
}
