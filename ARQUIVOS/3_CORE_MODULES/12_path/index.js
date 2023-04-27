const path = require("path");

const customPath = "/teste/flamengo.txt";

console.log(path.dirname(customPath));
console.log(path.basename(customPath));
console.log(path.extname(customPath));