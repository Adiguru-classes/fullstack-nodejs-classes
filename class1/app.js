// const os =require("os")
console.log("Hello Node");


console.log("My name is Raj");
console.log("I am learning Node.js");
console.log("JavaScript can run outside the browser");


const name = "Raj";
const age = 30;

console.log(name);
console.log(age);

const os = require("os");

console.log(os.platform());//What operating system platform is this computer using
console.log(os.arch());//What CPU architecture is Node.js running on
console.log(os.cpus().length);
console.log("Uptime:", os.uptime());