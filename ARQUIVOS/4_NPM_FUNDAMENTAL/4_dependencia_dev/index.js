const _ = require("lodash");
const chalk = require("chalk");
const a = [1,6,7,4];
const b = [1,3,7,5];

console.log(chalk.red(_.difference(a,b)));