export function mostrarAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        if (tipo === "error") {
            const error = document.createElement('p');
            error.textContent = mensaje;
            error.classList.add('bg-red-100', 'rounded', 'text-red-700', 'max-w-lg', 'px-4', 'text-center', 'mt-6', 'mx-auto', 'py-3');
            formulario.appendChild(error);

            setTimeout(() => {
                error.remove();
            }, 3000)

        } else {
            const exito = document.createElement('p');
            exito.textContent = mensaje;
            exito.classList.add('bg-blue-100', 'rounded', 'text-blue-700', 'max-w-lg', 'px-4', 'text-center', 'mt-6', 'mx-auto', 'py-3');
            formulario.appendChild(exito);

            setTimeout(() => {
                exito.remove();
            }, 3000)

        }
    }
}