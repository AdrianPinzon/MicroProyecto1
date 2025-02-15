'use strict';
let jugarAhora = document.getElementById("jugar");
let input = document.getElementById("inputText");
let nombre = input.nombre.value

alert(nombre)

jugarAhora.onclick = function() {
    alert(nombre)
    //if (nombre != "") {
        alert("pasamos")
        const usuarioGuardado = localStorage.getItem(nombre);
        alert(usuarioGuardado)
        if (usuarioGuardado != 0) {
            let jugadorActual = nombre;

            localStorage.setItem("jugadorActual", jugadorActual);
            alert('Comienza el juego');
            window.location="./juego.html";
            //localStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
        } 
        else {
            let jugadorActual = nombre;
            let puntajeJugador = 0;
            localStorage.setItem("jugadorActual", jugadorActual);
            localStorage.setItem(nombre, puntajeJugador);
            alert('Se creo usuario y comienza el juego');
            window.location="./juego.html"
        }
        
   // }

}
