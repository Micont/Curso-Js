const carrito =[
    {nombre:"monitor 27 pulgadas" , precio:500},
    {nombre:"Iphone" , precio:1500},
    {nombre:"laptop" , precio:4000},
    {nombre:"cocina" , precio:900},
    {nombre:"lavadora" , precio:2500},
]



for(let i=0; i< carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio ${producto.precio}`);
} )