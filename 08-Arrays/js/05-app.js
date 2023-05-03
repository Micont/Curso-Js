const carrito =[];

//Definir un producto 
const producto ={
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}
const prod2 = {
    nombre:"celular"
}

carrito.push(producto);
carrito.push(prod2);

const producto3 = {
    nombre: "telefono",
    precio: 2500
}

let resultado;

resultado =[... carrito, producto]

carrito.unshift(producto3);

console.table(resultado);