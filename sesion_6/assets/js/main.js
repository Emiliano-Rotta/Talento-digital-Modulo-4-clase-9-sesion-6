// Asincronismo
//Callback

//Un callback es una función que se pasa como argumento a otra función y luego se invoca dentro de la función principal para completar alguna tarea. El concepto central es que permite que una función sea ejecutada después de que otra haya terminado su tarea.

// console.log("primero")

// function saludo(nombre){
//     console.log("segundo")
//     alert ("Hola " + nombre)
// }

// function procesaEntrada(callback){
//     console.log("tercero")
//     var nombre = prompt("ingresa tu nombre")
//     callback(nombre)
// }
// console.log("cuarto")

// procesaEntrada(saludo)
// console.log("quinto")

//----------------------------
// Implementa una función que simule una operación matemática que recibe un número y un callback para mostrar el resultado.

// console.log("primero")
// function multiplicacion(num, callback){
//     console.log("segundo")
//     let resultado= num*2
//     callback(resultado)
// }

// function mostrarResultado(resultado){
//     console.log("tercero")
//     console.log(resultado)
// }
// console.log("cuarto")
// multiplicacion(10, mostrarResultado )
// console.log("quinto")

//----------------------------------------------------------
//                       setTimeout()
//----------------------------------------------------------

// setTimeout() es una función en JavaScript que permite ejecutar una función después de un periodo específico de tiempo (en milisegundos). Esto permite retrasar la ejecución de una operación sin bloquear el resto del código.

//sintaxis: setTimeOut(function, tiempo)


// setTimeout(function () {
//     console.log("tarea completada en 3 segundos")
// }, 3000)


// setTimeout(function () {
//     console.log("tarea completada en 2 segundos")
// }, 2000)

// setTimeout(function () {
//     console.log("tarea completada en 1 segundos")
// }, 1000)

// console.log("tarea completada en 0 segundos")

//----------------------------------------------------------
//                       setInterval()
//----------------------------------------------------------

// setInterval() ejecuta una función repetidamente cada cierto intervalo de tiempo (en milisegundos), hasta que se detiene con clearInterval().

//sintaxis: setInterval(function, tiempo)

// let contador = 0
// let id = setInterval(() => {
//     contador++
//     console.log(`lo repetimos cada ${contador} segundo`)
// }, 1000);

//----------------------------------------------------------
//                       clearInterval()
//----------------------------------------------------------
//se utiliza para detener un intervalo que ha sido previamente configurado con setInterval(). Un intervalo es una tarea que se ejecuta repetidamente en un período de tiempo específico, y clearInterval() permite detener esa ejecución continua.

//sintaxis: clearInterval(id)

// let contador = 0
// let id = setInterval(() => {
//     contador++
//     console.log(`lo repetimos cada ${contador} segundo`)
//     if (contador === 10){
//         clearInterval(id)
//     }
// }, 1000);

//-----------
// const boton = document.getElementById("btnDetener")

// let contador = 0
// let id = setInterval(() => {
//     contador++
//     console.log(`lo repetimos cada ${contador} segundo`)
//     boton.onclick = function(){
//         clearInterval(id)
//         console.log(`Temporizador frenado`)
//     }
  
// }, 1000);