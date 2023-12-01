import  { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from "react-router-dom";

const AdmActualizarProducto = ( ) => {
  const { id } = useParams(); 

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [destacado, setDestacado] = useState(false);
  const [imagen, setImagen] = useState('');

  const productoActualizado = () => {
    const parametros = {
      nombre: nombre,
      precio: precio,
      destacado: destacado,
      imagen: imagen,
    };
    console.log('Parámetros del producto:', parametros);

    axios.put(`http://localhost:3001/producto/actualizar/${id}`, parametros)
      .then(() => {
        swal('Producto actualizado correctamente', { icon: 'success' });
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
          Nombre de producto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
          Precio de producto
        </label>
        <input
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="precio"
          type="text"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destacado">
          Producto destacado
        </label>
        <input
          className="form-checkbox h-5 w-5"
          id="destacado"
          type="checkbox"
          checked={destacado}
          onChange={(e) => setDestacado(e.target.checked)}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
          Imagen de producto
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="imagen"
          placeholder="Imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />
        <button onClick={productoActualizado}>Actualizar Producto</button>
      </div>
    </div>
  );
};

export default AdmActualizarProducto;
