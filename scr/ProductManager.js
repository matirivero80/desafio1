
// const fs = require ("fs");
import fs from "fs";

class productManager{
    products;
    path;

    static idIncrementable= 0;


    constructor(){
        this.products = this.leerArchivo();
        this.path = "./scr/archivo/productos.json"
    }

    leerArchivo(){
        try {
            if(fs.existsSync(this.path))
                return JSON.parse(fs.readFileSync(this.path,"utf-8"));
            return [];
            
        } catch (error) {
            console.log("No se puede leer el archivo")
        }
    }

    actualizarArchivos(){
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products))
            
        } catch (error) {
            console.log("error al actualizar archivo")
            
        }
    }

    addProduct({title,description,price,thumbnail=[],code,stock, category, status = true}){
        if(!title || !description || !price || !thumbnail || !code || !stock || !category)
           return "Todos los parametros son obligatorios"
        const codigoInvalido = this.products.find(p=> p.code == code);
        if(codigoInvalido)
           return "El codigo ya fue asignado,use otro"
         productManager.idIncrementable = productManager.idIncrementable ++;
         const id = productManager.idIncrementable;

           const productoNuevo ={
            id:id,
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock,
            category:category,
            status:status
           };

           this.products.push(productoNuevo);
           this.actualizarArchivos();

           return "Producto agregado exitosamente"

    }

    getProducts(limit = 0){
        limit = Number(limit)
        if (limit > 0)
            return this.products.slice(0, limit);
        return this.products;

    }

    getProductById(id){
        let status = false;
        let resp = "producto inexistente"
        const elemento = this.products.find(p => p.id == id)
        if(elemento){
            status = true;
            resp = elemento
        }

        return {status, resp}
           
        
            

    }

    updateProduct(id , propiedades){
        const borrar = this.products. findborrar(p=> p.id === id);
        if(borrar >= 0){
            const {id, ...rest} = propiedades;
            this.products[borrar] = {...this.products[borrar],...rest}
            this.actualizarArchivos
            console.log("producto actualizado")
        }

    }

    deleteProduct(id){
        const borrar = this.products.findborrar(p=> p.id === id);
        if(borrar >= 0){
            this.products = this.products.filter(p=> p.id !== id);
            this.actualizarArchivos();
        }
        return "el id no existe"

    }

}

// module.exports = productManager;
export default productManager;