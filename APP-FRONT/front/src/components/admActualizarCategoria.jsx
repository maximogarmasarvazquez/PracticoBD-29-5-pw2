import  { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from "react-router-dom";

const AdmActualizarCategoria = ( ) => {
  const { id } = useParams(); 

  const [nombre, setNombre] = useState('');

  const categoriaActualizada = () => {
    const parametros = {
      nombre: nombre
    };
    console.log('Parámetros de la categoria:', parametros);

    axios.put(`http://localhost:3001/categoria/actualizar/${id}`, parametros)
      .then(() => {
        swal('categoria actualizada correctamente', { icon: 'success' });
      })
      .catch((error) => {
        swal('Error en la solicitud', { icon: 'error' });
        console.log(error);
      });
  };

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
        <button onClick={categoriaActualizada}>Actualizar Categoria</button>
      </div>
    </div>
  );
};

export default AdmActualizarCategoria;
