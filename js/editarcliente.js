import { editarCliente, obtenerCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function () {
    // * Campos del formulario

    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono')
    const empresaInput = document.querySelector('#empresa')
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {

        formulario.addEventListener('submit',validarCliente);

        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        const { nombre, email, telefono, empresa, id } = cliente;


        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;


        function validarCliente(e) {
            e.preventDefault();

            const cliente = {
                nombre: nombreInput.value,
                email : emailInput.value,
                telefono : telefonoInput.value,
                empresa : empresaInput.value,
                id: parseInt(idInput.value),
            }

            console.log(cliente);

            //Validar cliente
            if (Object.values(cliente).includes('')) {
                mostrarAlerta('Todos los campos son obligatorios', 'error');
                return;
            }

            mostrarAlerta('Cliente creado correctamente');

            editarCliente(cliente);
        }






    })

})();