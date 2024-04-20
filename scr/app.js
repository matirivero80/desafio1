import express from "express";
import {Server} from "socket.io";
import {engine} from "express-handlebars";



import products from "./routers/products.js";
import carts from "./routers/carts.js";
import views from "./routers/views.js";
import __dirname from "./utils.js";
import productManager from "./ProductManager.js";







const app = express();

const PORT = 8080;


const p = new productManager();

app.use (express.json());
app.use (express.urlencoded({extended: true}));
app.use (express.static(__dirname + "/public"));

app.engine("handlebars" , engine());
app.set("view engine" , "handlebars");
app.set("views" , __dirname + "/views");

// app.get("/" ,(req,res)=>{
//     return res.render("home");
// })

app.use("/", views);
app.use("/api/products", products);
app.use("/api/carts", carts);



const expressServer = app.listen(PORT,()=> {
    console.log("reproduciendo aplicacion en el puerto 8080")
});

const socketServer = new Server(expressServer);

socketServer.on("connection", socket=>{
    const productos = p.getProducts();
    socket.emit("productos", productos);

    socket.on("agregar producto", producto =>{
        const result = p.addProduct({...producto});
    })


});


 