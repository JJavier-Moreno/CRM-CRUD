
const url = 'http://localhost:4000/clientes';

const nuevoCliente = async(cliente) =>{

    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }


}

const getClientes = async() => {
    
    try{
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
        
    }catch(error){
        console.log(error);
    }
    
}

const eliminarCliente = async(id) =>{

    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })

    }catch(error){
        console.log(error);
    }

}
const obtenerCliente = async(id) => {

    try{
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        console.log(cliente);
        return cliente;
        

    }catch(error){
        console.log(error);
    }

}

const editarCliente = async(cliente) =>{

    const {id} = cliente;

    try{
        await fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-type' : 'application/json'
            }
        })

        window.location.href = 'index.html'

    }catch(error){
        console.log(error);
    }
}


export {nuevoCliente, getClientes, eliminarCliente, obtenerCliente, editarCliente};