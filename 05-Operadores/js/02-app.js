const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revvisar si 2 numero son iguales
// es mucho mas blanco y puede comparar datos distinto 

console.log(numero1 == numero3);
console.log(numero1 == numero2);

///Comparador estricto 
// verifica si es mismo tipo de datos para poder comparar
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(typeof numero1);
console.log(typeof numero2);


//Diferente
const password1 = "Admin";
const password2 = "admin"

console.log(password1 != password2);
console.log(numero1 !== numero2);
console.log(numero1 !== parseInt(numero2)); 
