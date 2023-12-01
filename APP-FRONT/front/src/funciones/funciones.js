import axios from 'axios'

const todosProductos= async (state) => {
    const peticion = await axios.get('http://localhost:3001/producto/lista')
    state(peticion.data)
} 

const unicoProducto = async (id,state) => {
    const peticion = await axios.get(`http://localhost:3001/producto/filtrar/id/${id}`)
    state(peticion.data)

}


export{
    todosProductos,
    unicoProducto}

    