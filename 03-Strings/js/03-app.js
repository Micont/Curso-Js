const producto = "Monito de 20 pulgadas";
const precio = "30 USD" ;


//Metodo para concatenar solo funciona con String
// console.log(producto.concat(precio));
// console.log(producto.concat("En Descuento"));


// concatenar con el simbolo "+" 

// console.log("El producto " + producto + " tiene un precio de " + precio );
// console.log("El producto " , producto , " tiene un precio de " , precio );


//concatenar con el template String
console.log(`El producto ${producto} tiene un precio de $ ${precio}`)

