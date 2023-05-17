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
        else if(action === 'Consultar Saldo' ){
            getAccountBalance();
        }
        else if(action === 'Depositar' ){
            deposit();
        }
        else if(action === 'Sacar' ){
            withDraw();
        }
        else if(action === 'Sair' ){
            endToProgram();
        }
    }).catch((err) => console.log(err));
};


operation();

const endToProgram = () =>{
    console.log(chalk.bgBlue.black("Obrigado por utilizar o Accounts!"));
    process.exit();
}
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
};

// add an amount to user account
const deposit = () => {
    inquirer.prompt([{
        name:"accountName",
        message:"Qual o nome da sua conta?"
    }]).then((answer)=>{
        const accountName = answer['accountName'];
        if(!verifyAccount(`accounts/${accountName}.json`)){
         return deposit();
        } 
        inquirer.prompt([{
            name:"amount",
            message:"Quanto você deseja depositar?"
        }]).then((answer)=>{
            const amount = answer['amount'];
            addAmount(`accounts/${accountName}.json`,amount);
            operation();
        }).catch((err) => console.log(err));

    }).catch((err) => console.log(err));

};

const verifyAccount = (accountName) => {
    if(!fs.existsSync(accountName)){
        console.log(chalk.bgRed.black("Esta conta não existe. Escolha outra conta!"));
        return false;
    }
    return true;
}

const addAmount = (accountName,amount) => {
    const accountData = getAccount(accountName);
    if(!amount){
        console.log(chalk.bgRed.black("Erro ao informar o valor, tente mais tarde!"));
        return deposit();
    }
    accountData.balance = parseFloat(accountData.balance) + parseFloat(amount);
    fs.writeFileSync(accountName,JSON.stringify(accountData),(err) => {
        console.log(err);
    });
    console.log(chalk.green(`Foi depositado R$ ${amount} na sua conta!`));
}

const getAccount = (accountName) => {
    const accountJSON = fs.readFileSync(accountName,{
        encoding:'utf8',
        flag:'r'
    });
    return JSON.parse(accountJSON);
}
const getAccountBalance = () => {
    inquirer.prompt([{
        name:"accountName",
        message:"Qual o nome da sua conta?"
    }]).then((answer)=>{
        const accountName = answer['accountName'];
        if(!verifyAccount(`accounts/${accountName}.json`)){
         return getAccountBalance();
        } 
        const accountData = getAccount(`accounts/${accountName}.json`);
        if(accountData.balance >= 0.00){
          console.log(chalk.green(`Seu saldo atual é de R$ ${accountData.balance}`));
        } else {
            console.log(chalk.red(`Seu saldo atual é de R$ ${accountData.balance}`));
        }
        return operation();
    }).catch((err) => console.log(err));
};

const withDraw = (accountName,amount) => {
    inquirer.prompt([{
        name:"accountName",
        message:"Qual o nome da sua conta?"
    }]).then((answer)=>{
        const accountName = answer['accountName'];
        if(!verifyAccount(`accounts/${accountName}.json`)){
         return withDraw();
        } 
        inquirer.prompt([{
            name:"amount",
            message:"Quanto você deseja sacar?"
        }]).then((answer)=>{
            const amount = answer['amount'];
            getAmount(`accounts/${accountName}.json`,amount);
            operation();
        }).catch((err) => console.log(err));

    }).catch((err) => console.log(err));
};

const getAmount = (accountName,amount) => {
    const accountData = getAccount(accountName);
    if(!amount){
        console.log(chalk.bgRed.black("Erro ao informar o valor, tente mais tarde!"));
        return deposit();
    }
    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);
    fs.writeFileSync(accountName,JSON.stringify(accountData),(err) => {
        console.log(err);
    });
    if(accountData.balance >= 0.00){
      console.log(chalk.green(`Seu saldo é R$ ${accountData.balance} !`));
    } else {
        console.log(chalk.red(`Seu saldo é R$ ${accountData.balance} !`)); 
    }
}