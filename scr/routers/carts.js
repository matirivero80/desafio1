import { Router } from "express";
import cartsManager from "./CartsManager.js";

const router = Router();

router.get("/:cid",(req,res)=>{
    const {cid} = req.params;
    const c = new cartsManager();
    const result = c.getCartById(Number(cid));
    return res.json({result});
})

router.post("/",(req,res)=>{
    const c = new cartsManager();
    const result = c.createCart();
    return res.json({result});
})

router.post("/:cid/product/:pid",(req,res)=>{
    const {cid,pid} = req.params;
    const c = new cartsManager();
    const result = c.addProductInCart(Number(cid), Number(pid));
    return res.json({result});
})

export default router;