
import fs from "fs";
import productManager from "../ProductManager";

class cartsManager{
    carts;
    path;

    static idIncrementable= 0;


    constructor(){
        this.carts = this.leerCarritos();
        this.path = "./scr/archivo/carritos.json"
    }

    leerCarritos(){
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
            fs.writeFileSync(this.path, JSON.stringify(this.carts))
            
        } catch (error) {
            console.log("error al actualizar archivo")
            
        }
    }


    createCart(){
        const newCart = {
            products: []
        };

        this.carts.push(newCart);
        this.actualizarArchivos();

        return newCart;
    }

    // addProduct(title,description,price,thumbnail=[],code,stock, category, status = true){
    //     if(!title || !description || !price || !thumbnail || !code || !stock || !category)
    //        return "Todos los parametros son obligatorios"
    //     const codigoInvalido = this.products.find(p=> p.code == code);
    //     if(codigoInvalido)
    //        return "El codigo ya fue asignado,use otro"
    //      productManager.idIncrementable = productManager.idIncrementable ++;
    //      const id = productManager.idIncrementable;

    //        const productoNuevo ={
    //         id:id,
    //         title:title,
    //         description:description,
    //         price:price,
    //         thumbnail:thumbnail,
    //         code:code,
    //         stock:stock,
    //         category:category,
    //         status:status
    //        };

    //        this.products.push(productoNuevo);
    //        this.actualizarArchivos();

    //        return "Producto agregado exitosamente"

    // }

    // getProducts(limit = 0){
    //     limit = Number(limit)
    //     if (limit > 0)
    //         return this.products.slice(0, limit);
    //     return this.products;

    // }

    getCartById(id){
        const elemento = this.carts.find(p => p.id == id)
        if(elemento)
           return elemento
        else
           return `Not Found ${id}` 

    }


    addProductInCart(cid, pid){
        let respuesta = "el carrito no existe";
        const indexCarrito = this.carts.findIndex(c=> c.id === cid);

        if (indexCarrito !==-1){
            const indexProductoInCart = this.carts[indexCarrito].products.findIndex(p=> p.id=== pid);
            const p = new productManager();
            const producto = p.getProductById(pid);

            if (elemento.status && indexProductoInCart === -1){
                this.carts[indexCarrito].products.push({id: pid, "quantity": 1});
                this.actualizarArchivos();
                respuesta = "producto agregado exitosamente";
            }else if(producto.status && indexProductoInCart !== -1){
                this.carts[indexCarrito].products[indexProductoInCart]. quantity;
                this.actualizarArchivos();
                respuesta = "producto agregado exitosamente";

            }

        }

        return respuesta;

    }

//     updateProduct(id , propiedades){
//         const borrar = this.products. findborrar(p=> p.id === id);
//         if(borrar >= 0){
//             const {id, ...rest} = propiedades;
//             this.products[borrar] = {...this.products[borrar],...rest}
//             this.actualizarArchivos
//             console.log("producto actualizado")
//         }

//     }

//     deleteProduct(id){
//         const borrar = this.products.findborrar(p=> p.id === id);
//         if(borrar >= 0){
//             this.products = this.products.filter(p=> p.id !== id);
//             this.actualizarArchivos();
//         }
//         return "el id no existe"

//     }

}


export default cartsManager;