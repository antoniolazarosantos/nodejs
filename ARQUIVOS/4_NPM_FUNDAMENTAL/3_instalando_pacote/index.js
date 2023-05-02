const _ = require("lodash");
const a = [1,5,6,9,0];
const b = [7,3,4,1,0];
const diff = _.difference(a,b);
console.log(diff);
const diff2 = _.difference(b,a);
console.log(diff2);