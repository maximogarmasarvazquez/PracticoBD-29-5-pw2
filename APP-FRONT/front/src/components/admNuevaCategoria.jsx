import  { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const AdmNuevaCategoria = () => {
  const [nombre, setNombre] = useState('');

  function nuevaCategoria() {
    const parametros = {
      nombre: nombre
    };
    console.log('Parámetros de la categoria:', parametros); // Verificar los datos antes de la solicitud

    axios.post('http://localhost:3001/categoria/nuevo', parametros )
      .then(() => {
        swal('categoria agregada correctamente',  {icon: "success"});
        // Aquí puedes manejar cómo quieres actualizar la interfaz después de agregar el producto
        // Por ejemplo, podrías limpiar los campos o actualizar la lista de productos.
      })
      .catch((error) => {
        swal('Error en la solicitud', {icon: 'error'});
        console.log(error);
      });
  }

  return (
    <div className="bg-gray-200 py-16 px-16 rounded-md">
      <div className="bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md text-secondary">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Nombre de la categoria 
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        
        <button onClick={nuevaCategoria}>Crear Categoria</button>
      </div>
    </div>
  );
};

export default AdmNuevaCategoria;
