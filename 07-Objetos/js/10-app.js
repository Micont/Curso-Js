"use strict";

const producto = {
    nombre : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);


// Spredd Operador o Rest Opedador
const resultado2 = { ...producto,...medidas};

console.log(resultado)
console.log("Resultado 2 ",resultado2)

