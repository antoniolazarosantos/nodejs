const x = 10;
const y = "Algum valor";
const z = [1,2,3,4];

console.log(x,y,z);

// contagem de impressões

console.count(`O valor de x é : ${x}, contagem:`);
console.count(`O valor de x é : ${x}, contagem:`);
console.count(`O valor de x é : ${x}, contagem:`);

// variável entre string
console.log("%s",y);

setTimeout(()=>{
    console.clear();
},2000);