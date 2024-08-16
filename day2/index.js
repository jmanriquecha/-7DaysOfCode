// Declaración de variables

let nombre, edad, lenguaje, lenguajeOk;

// Pedimos información al usuario

nombre = prompt('¿Cuál es tú nombre?');
edad = parseInt(prompt('¿Cuántos años tienes?'));
lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');
// Imprime mensaje en consola
console.log(`Hola ${nombre.toLowerCase()}, tienes ${edad} años y ya estás aprendiendo ${lenguaje.toLowerCase()}!`);

// Pregunta Si/No
lenguajeOk = parseInt(prompt(`¿Te gusta estudiar ${lenguaje.toLowerCase()}? Responde con el número 1 para SÍ o 2 para NO.`));

// Validaciones
if (lenguajeOk === 1) {
    console.log('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
} else if (lenguajeOk == 2) {
    console.log('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
} else {
    console.log('La opción elegida no es válida!')
}
