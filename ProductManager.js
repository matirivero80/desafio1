
class productManager{
    products;

    static idIncrementable= 0;


    constructor(){
        this.products = []
    }

    addProduct(title,description,price,thumbnail,code,stock){
        if(!title || !description || !price || !thumbnail || !code || !stock)
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
            stock:stock
           };

           this.products.push(productoNuevo);

           return "Producto agregado exitosamente"

    }

    getProducts(){
        return this.products;

    }

    getProductById(id){
        const elemento = this.products.find(p => p.id == id)
        if(elemento)
           return elemento
        else
           return `Not Found ${id}` 

    }

}

module.exports = productManager;