const a = () => {
    console.log("Executa a()");
};

const b = () => {
    console.log("Executa b()");
};

const c = () => {
    console.log("Executa c()");
    b()
    a()
};

c();