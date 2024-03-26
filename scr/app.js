import express from "express";
import productManager from "./ProductManager.js";



const app = express();

const PORT = 8080;

app.get("/produts",(req,res)=>{
    const {limit} = req.query;
    const p = new productManager();
   const productos = p.getProducts(limit);
   return res.json({produc:productos});
});

app.get("/products/:pid",(req,res)=>{
    const {pid} = req.params;
    const p = new productManager();
    const producto = p.getProductById(Number(pid));
    return res.json({producto});
})

app.listen(PORT,()=> {
    console.log("reproduciendo aplicacion en el puerto 8080")
})