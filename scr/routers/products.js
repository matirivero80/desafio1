import { Router } from "express";
import productManager from "../ProductManager.js";

const router = Router();

router.get("/produts",(req,res)=>{
    const {limit} = req.query;
    const p = new productManager();
   const productos = p.getProducts(limit);
   return res.json({produc:productos});
});

router.get("/products/:pid",(req,res)=>{
    const {pid} = req.params;
    const p = new productManager();
    const producto = p.getProductById(Number(pid));
    return res.json({producto});
})

router.post("/",(req,res)=>{
    const {title, descriptions, price, thumbnail, code, stock, category, status} = req.body;
    const p = new productManager();
    const result = p.addProduct(title, descriptions, price, thumbnail, code, stock, category, status);
    return res.json({result});
});

router.put("/:pid",(req,res)=>{
    const {pid} = req.params;
    const p = new productManager();
    const result = p.updateProduct(number(pid), req.body);
    return res.json({result});
})

router.delete("/:pid",(req,res)=>{
    const {pid} = req.params;
    const p = new productManager();
    const result = p.deleteProduct(number(pid));
    return res.json({result});
})

export default router;