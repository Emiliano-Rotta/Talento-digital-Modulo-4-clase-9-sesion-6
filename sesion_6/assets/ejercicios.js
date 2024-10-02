// Callback

// // 1 Crea una función mostrarMensaje que reciba un mensaje y lo muestre en un alert(). Luego, crea otra función solicitarMensaje que pida al usuario que ingrese un mensaje usando prompt(), y que llame a mostrarMensaje con el valor ingresado.

// // 2 Implementa una función multiplicarPorDos que reciba un número y muestre el resultado en un alert(). Luego, crea una función pedirNumero que solicite un número al usuario con prompt() y pase ese número a multiplicarPorDos mediante un callback.

// // 3 Crea una función mostrarFecha que muestre la fecha actual en un alert(). Luego, implementa otra función pedirConfirmacion que le pregunte al usuario si desea ver la fecha usando confirm(). Si el usuario acepta, llama a mostrarFecha mediante un callback.

// // 4 Escribe una función convertirMayusculas que reciba una cadena de texto y la convierta a mayúsculas, luego muestre el resultado en un alert(). Crea también la función solicitarTexto que pida al usuario que ingrese un texto con prompt() y luego pase ese texto a convertirMayusculas mediante un callback.

// // 5 Crea una función calcularEdad que reciba el año de nacimiento del usuario y calcule su edad actual, mostrando el resultado en un alert(). Luego, crea una función solicitarNacimiento que pida el año de nacimiento al usuario y llame a calcularEdad mediante un callback.

// //1
// function mostrarMensaje(mensaje) {
//     alert(`Mensaje ingresado: ${mensaje}`);
// }

// function solicitarMensaje(callback) {
//     var mensaje = prompt('Ingresa un mensaje:');
//     callback(mensaje);
// }

// solicitarMensaje(mostrarMensaje);

// //2
// function multiplicarPorDos(numero) {
//     alert(`El doble de ${numero} es ${numero * 2}`);
// }

// function pedirNumero(callback) {
//     var numero = prompt('Ingresa un número:');
//     callback(Number(numero));
// }

// pedirNumero(multiplicarPorDos);

// //3
// function mostrarFecha() {
//     alert(`La fecha actual es: ${new Date()}`);
// }

// function pedirConfirmacion(callback) {
//     var confirmacion = confirm('¿Deseas ver la fecha actual?');
//     if (confirmacion) {
//         callback();
//     }
// }

// pedirConfirmacion(mostrarFecha);

// //4
// function convertirMayusculas(texto) {
//     alert(`Texto en mayúsculas: ${texto.toUpperCase()}`);
// }

// function solicitarTexto(callback) {
//     var texto = prompt('Ingresa un texto:');
//     callback(texto);
// }

// solicitarTexto(convertirMayusculas);

// //5
// function calcularEdad(anoNacimiento) {
//     var edad = new Date().getFullYear() - anoNacimiento;
//     alert(`Tienes ${edad} años.`);
// }

//-------------------------------------------------------
//setTimeout()

// Consignas:

//1 Crea una función que imprima "¡Hola!" después de 2 segundos.

//2 Implementa un temporizador que imprima "Tiempo agotado" después de 5 segundos.

//3 Escribe un código que imprima "Inicio", luego "Medio" después de 3 segundos, y finalmente "Fin" después de 5 segundos.

// //1
// setTimeout(function() {
//     console.log("¡Hola!");
// }, 2000);

// //2
// setTimeout(function() {
//     console.log("Tiempo agotado");
// }, 5000);

// //3
// console.log("Inicio");

// setTimeout(function() {
//     console.log("Medio");
// }, 3000);

// setTimeout(function() {
//     console.log("Fin");
// }, 5000);

//-------------------------------------------------------
//SetInterval()
// Consignas:

// 1 Crea un temporizador que imprima "Ejecutando..." cada 3 segundos.

// 2 Haz un contador que se incremente cada 1 segundo e imprima el valor.

//1 
//setInterval(function() {
//     console.log("Ejecutando...");
// }, 3000);

//2
// let contador = 0;
// setInterval(function() {
//     contador++;
//     console.log(contador);
// }, 1000);

//-------------------------------------------------------------------------
//clearInterval()

// Ejercicio 1: Detener un contador
// Crea un contador que se incrementa cada segundo. Cuando el contador llegue a 10, el intervalo debe detenerse.

// Ejercicio 2: Temporizador que se detiene manualmente
// Crea un temporizador que se ejecute cada segundo e imprima "Temporizador activo". Usa un botón para detener el temporizador al hacer clic.

//1
// let contador = 0;
// let intervalo = setInterval(function() {
//     contador++;
//     console.log(`Contador: ${contador}`);
//     if (contador === 10) {
//         clearInterval(intervalo);
//         console.log("El intervalo ha sido detenido.");
//     }
// }, 1000);

//2

//El mismo que vimos en clase


//----------------------------
