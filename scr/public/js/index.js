const socket = io();

socket.on("productos", productos =>{
    const tbody = document.getElementById("productosbody");
    tbody.innerHTML = "";

    productos.forEach(producto => {
        const row = tbody.insertRow();

        row.innerHTML = `
        <td>${producto.id}</td>
        <td>${producto.title}</td>
        <td>${producto.description}</td>
        <td>${producto.price}</td>
        <td>${producto.code}</td>
        <td>${producto.stock}</td>
        <td>${producto.category}</td>
        <td>${producto.status}</td>
        <td>${producto.thumbnails="no hay imagen"}</td>
        
        ` 
        
        
         
        
    });
});


const formulario = document.getElementById("producto-form");

formulario.addEventListener("submit" ,function (event) {
    event.preventDefault();

});


const producto = {
    title: titulo,
    description: descripcion,
    price: precio ,
    code: codigo,
    stock: stock,
    category:categoria


};


socket.emit ("agregar producto", producto);