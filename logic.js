'use strict';
// estas son las listas que se va a usar en el juego
var listaColoresBase = ['amarillo', 'azul', 'rojo', 'verde'] //de aqui es donde se agarran los colores al azar
var listaColoresJuego = ["amarillo", "azul", "rojo", "verde"] //aqui es donde se van poniendo esos colores escojidos al azar
var listaAcertados = [] // esta lleva registro de los clicks que hace el jugador para comparar con la de arriba y determinar cuando pierde
let r = 0 // esto es una variable que uso en una funcion, no se por que la defini afuera 



function desactivarBotones() { // esta funcion es la que me oculta los botones funcionales y me activa los de adorno no brillantes
    azul.style.display = "none";
    azulNeonDisplay.style.display = "none";
    azulDisplay.style.display = "initial";
    amarillo.style.display = "none";
    amarilloNeonDisplay.style.display = "none";
    amarilloDisplay.style.display = "initial";
    verde.style.display = "none";
    verdeNeonDisplay.style.display = "none";
    verdeDisplay.style.display = "initial";
    rojo.style.display = "none";
    rojoNeonDisplay.style.display = "none";
    rojoDisplay.style.display = "initial";
    console.log("Botones desactivados")
    setTimeout(() => {
        console.log("wait...")
      }, "1000");
}

function activarBotones() {

    azulDisplay.style.display = "none";
    azul.style.display = "initial";
    rojoDisplay.style.display = "none";
    rojo.style.display = "initial";
    amarilloDisplay.style.display = "none";
    amarillo.style.display = "initial"
    verdeDisplay.style.display = "none";
    verde.style.display = "initial";
    console.log("Botones Activados")
    setTimeout(() => {                  //ESTOS SON LOS PUTOS TIMEOUTS QUE NO FUNCIONAN... Este y otros mas 
        console.log("wait...")
      }, "1000");

}

function patronColores() { // esta funcion es la que hace el hace que haga el display de la sucesion a jugar

    desactivarBotones() //se necesita desactivar los botones funcionales para que el jugador no pueda alterar el patron a repetir

    r = Math.floor(Math.random()*4)
    listaColoresJuego.push(listaColoresBase[r]) //aqui agrego un color random a la lista 

// AQUI ESTA EL PUTO FOR LOOP QUE NO SE DETIENE POR NADA DEL MUNDO QUE ME PRESIONA TODOS LOS BOTONES AL MISMO TIEMPO
// Idealmente tiene que pararse en la lista generada aleatoriamente y hacer como si se preciona, esperar
// y luego moverse al siguiente item de la lista hasta que termine y active de nuevo los botones funcionales

        for (let i = 0; i < listaColoresJuego.length; i++) { 
            console.log(listaColoresJuego[i])
            
            if (listaColoresJuego[i] === "azul") {
                console.log("AZUL")
                pressAzul()
                setTimeout(() => {
                    console.log("wait...")
                  }, "500");
            } 
            else if (listaColoresJuego[i] === "rojo") {
                console.log("ROJO")
                pressRojo()
                setTimeout(() => {
                    console.log("wait...")
                  }, "500");
            }
            else if (listaColoresJuego[i] === "amarillo") {
                console.log("AMARILLO")
                pressAmarillo()
                setTimeout(() => {
                    console.log("wait...")
                  }, "500");
            }
            else {
                console.log("VERDE")
                pressVerde()
                setTimeout(() => {
                    console.log("wait...")
                  }, "500");
            }
        }

    activarBotones() // la funcion que en teoria debe devolver los botones a su lugar, 
                    // pero como el fo loop y todo se hace como al mismo tiempo no quedan bien activados los botones
    
}        




function jugar(){
// esta funcion no está hecha pero esta supuesta a:
// comparar lista adivinados y del juego 
// si acierta agrega punto, y si la lista de juego y acertado tiene la misma longitud llama a patronColores()
// else termina el juego, compara con puntuaciones historicas, hace las actualizaciones pertinentes y llama al pop-up.

}

//estas son funciones de sonido 
function playAzul() {
    var sound = document.getElementById("azulSonido");
    sound.play();
}
function playVerde() {
    var sound = document.getElementById("verdeSonido");
    sound.play();
}
function playRojo() {
    var sound = document.getElementById("rojoSonido");
    sound.play();
}
function playAmarillo() {
    var sound = document.getElementById("amarilloSonido");
    sound.play();
}

function playError() {
    var sound = document.getElementById("error");
    sound.play();
}

//aquí me traigo a todos los botones del html

var azul = document.getElementById("azul")
var azulDisplay = document.getElementById("azulDisplay")
var azulNeonDisplay = document.getElementById("azulNeonDisplay")
var verde = document.getElementById("verde")
var verdeDisplay = document.getElementById("verdeDisplay")
var verdeNeonDisplay = document.getElementById("verdeNeonDisplay")
var rojo = document.getElementById("rojo")
var rojoDisplay = document.getElementById("rojoDisplay")
var rojoNeonDisplay = document.getElementById("rojoNeonDisplay")
var amarillo = document.getElementById("amarillo")
var amarilloDisplay = document.getElementById("amarilloDisplay")
var amarilloNeonDisplay = document.getElementById("amarilloNeonDisplay")
var go = document.getElementById("comenzar")

// aqui coloco el estado inicial de los botones, que al principio no pueden estar los interactivos

azul.style.display = "none";
azulNeonDisplay.style.display = "none";
amarillo.style.display = "none";
amarilloNeonDisplay.style.display = "none";
verde.style.display = "none";
verdeNeonDisplay.style.display = "none";
rojo.style.display = "none";
rojoNeonDisplay.style.display = "none";

//estas son las funciones que imitan el click y aqui sí me funcionan los timeouts no se por qué

function pressAzul() {
    azulDisplay.style.display = "none";
    azulNeonDisplay.style.display = "initial";
    setTimeout(() => {
        azulDisplay.style.display = "initial";
        azulNeonDisplay.style.display = "none";
      }, "400");
}

function pressRojo() {

    rojoDisplay.style.display = "none";
    rojoNeonDisplay.style.display = "initial";
    setTimeout(() => {
        rojoDisplay.style.display = "initial";
        rojoNeonDisplay.style.display = "none";
      }, "400");

}

function pressAmarillo() {

    amarilloDisplay.style.display = "none";
    amarilloNeonDisplay.style.display = "initial";
    setTimeout(() => {
        amarilloDisplay.style.display = "initial";
        amarilloNeonDisplay.style.display = "none";
      }, "400");

}

function pressVerde() {

    verdeDisplay.style.display = "none";
    verdeNeonDisplay.style.display = "initial";
    setTimeout(() => {
        verdeDisplay.style.display = "initial";
        verdeNeonDisplay.style.display = "none";
      }, "400");

}

// Y en esta parte hago las acciones de cuando se presionan los botones

azul.onclick = function() {

    listaAcertados.push("azul") //aqui agrego los colores a la lista de acertados 

    if (listaColoresJuego[listaColoresJuego.length - 1] == "azul") {
        playAzul()
    } 
    else {
        playError()
    }

    // aqui deberia llamar a la funcion jugar() para que verifique si es la correcta o no y siga con el juego o no
}

verde.onclick = function() {

    listaAcertados.push("verde")

    if (listaColoresJuego[listaColoresJuego.length - 1] == "verde") {
        playVerde()
    } 
    else {
        playError()
    }
}

amarillo.onclick = function() {

    listaAcertados.push("amarillo")

    if (listaColoresJuego[listaColoresJuego.length - 1] == "amarillo") {
        playAmarillo()
    } 
    else {
        playError()
    }
}

rojo.onclick = function() {

    listaAcertados.push("rojo")

    if (listaColoresJuego[listaColoresJuego.length - 1] == "rojo") {
        playRojo()
    } 
    else {
        playError()
    }
}

go.onclick = function() {
    //esto es el boton que estoy usando para probar las funciones pero este deberia llamar a patronColores() para arrancar el juego
    desactivarBotones()
    setTimeout(() => {
        console.log("wait...")      // otro timeuot que no funciona
    }, "1000");
    activarBotones()
}



var finalJuego = document.getElementById("finalJuego")
finalJuego.style.display = "none";
console.log(listaColoresJuego[0] + listaColoresJuego[1])
