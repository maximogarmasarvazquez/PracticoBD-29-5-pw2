import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../estilos/Productos.css';
import '../estilos/modeDark.css';
import ReactSwitch from "react-switch";
import { useThemeContext } from "../context/userContext";

function Productos() {
  const [articulos, setArticulos] = useState([]);
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(6); 

  const handleSwitch = (nextChecked) => {       
    setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'));
    setChecked(nextChecked);
  };

  const leerArticulos = () => {
    axios
      .get(`http://localhost:3001/Producto/lista?page=${currentPage}&size=${pageSize}`)
      .then((res) => {
        setArticulos(res.data.registros); // Asumiendo que la respuesta tiene una propiedad 'registros' con la lista de productos
        console.log(res.data.registros);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    leerArticulos();
  }, [currentPage, pageSize]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? 0 : prevPage - 1));
  };

  return (
    <div>
      <div id={contextTheme}>
        <ReactSwitch 
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        {contextTheme}

        <div className="title-cards">
          <h2>Productos que Ofrecemos</h2>
        </div>
        <div>
          <ul>
            <div className="container-card">
              <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-3">
                {articulos.map((product) => (
                  <Link key={product.id} to={`info/${product.id}`}>
                    <li>
                      <div className="card">
                        <div className=" bg-white rounded-md shadow-md hover:bg-gray-200 cursor-pointer">
                          <figure>
                            <img
                              src={product.imagen}
                              className="w-full h-64 object-cover"
                              alt={product.nombre}
                            />
                          </figure>
                          <div className="contenido-card">
                            <h1 className="text-center text-2xl font-bold">
                              {product.nombre}
                            </h1>
                            <p className="text-gray-500 text-sm mt-2 mb-2 p-3 text-justify">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quisquam, quisquam. Quisquam quisquam, quisquam.
                            </p>
                            <p className="text-center text-xl font-bold mb-4">
                              $ {product.precio}
                            </p>
                            <div className="etiqueta">Leer Mas</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </div>
            </div>
          </ul>
        </div>

        <div className="flex justify-center mt-4">
            <button
               onClick={handlePrevPage}
               disabled={currentPage === 0}
              className="bg-gray-200 hover:bg-gray-300 rounded-md py-1 px-3 mr-2"
            >
              Anterior
            </button> 
            <span className="pr-2">{currentPage}</span>
            
            <button onClick={handleNextPage}
              className="bg-gray-200 hover:bg-gray-300 rounded-md py-1 px-3"
            >
              Siguiente
            </button>
           
          </div>
        
        </div>
      </div>
  );
}

export default Productos;
