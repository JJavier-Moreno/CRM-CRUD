import { mostrarAlerta } from "./funciones.js";
import { nuevoCliente } from "./API.js";

(function(){

    const formulario = document.querySelector('#formulario');




//Cargar events listeners
cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', agregarCliente);
}

function agregarCliente(e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;
    
    const cliente = {
        nombre,
        email,
        telefono,
        empresa    
    }

    console.log(cliente);
    

    //Validar cliente
    if(Object.values(cliente).includes('')){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    mostrarAlerta('Cliente creado correctamente');
    nuevoCliente(cliente);


}


})();


