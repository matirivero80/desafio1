const productManager = require("./ProductManager");


const elemento = new productManager();

console.log(elemento.addProduct("Mesa","mesa para living",10000,"https://img1.com","mt1",4));
console.log(elemento.addProduct("banco","banco de jardin",20000,"https://img2.com","mt2",2));
console.log(elemento.addProduct("Silla","silla comedor",4500,"https://img3.com","mt3",8));