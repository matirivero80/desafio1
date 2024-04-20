
import { Router } from "express";
import productManager from "../ProductManager.js";

const router = Router();

router.get("/" ,(req,res)=>{
    const p = new productManager();
    const elemento = p.getProducts();
    return res.render("home", {elemento});
});


router.get("/realTimeProducts" ,(req,res)=>{
    
    return res.render("realTimeProducts");
});

export default router;