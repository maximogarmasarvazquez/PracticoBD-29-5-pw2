import { useEffect, useState } from "react";
import axios from "axios";
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../estilos/admin.css';
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function Admin() {
  const [articulos, setArticulos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const [currentPageCat, setCurrentPageCat] = useState(0);
  const [currentPageProd, setCurrentPageProd] = useState(0);

  const handlePageCat = (pageNumbeCat) => {
    setCurrentPageCat(pageNumbeCat);
    leerCategorias(pageNumbeCat);
  };

  const handlePageProd = (pageNumberProd) => {
    setCurrentPageProd(pageNumberProd);
    leerArticulos(pageNumberProd);
  };
  const leerArticulos = (page = 0, size = 5) => {
    axios
      .get(`http://localhost:3001/Producto/lista?page=${page}&size=${size}`)
      .then((res) => {
        setArticulos(res.data.registros);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const leerCategorias = (page = 0, size = 5) => {
    axios
      .get(`http://localhost:3001/Categoria/lista?page=${page}&size=${size}`)
      .then((res) => {
        setCategorias(res.data.registros);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    leerArticulos();
    leerCategorias();
  }, []);

  const eliminarCategoria = (id) => {
    swal({
      title: "seguro quiere eliminar esta categoria?",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
   })
    .then((willDelete) => {
      if (willDelete) {

        axios
      .delete(`http://localhost:3001/Categoria/eliminar/${id}`)
      .then(() => {
        leerCategorias();
      })
      .catch((err) => {
        console.log(err);
      });  
      
        swal("su categoria se a eliminado correctamente", {
          icon: "success",
        });
    } else { 
       swal("Operacion cancelada","su categoria no se ha eliminado","info");
    }  
  
  });
  };
  const actualizarCategoria = (id) => {
    navigate(`/actualizarCategoria/${id}`);
  };
  const eliminarProducto = (id) => {
    swal({
      title: "seguro quiere eliminar este producto?",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
   })
    .then((willDelete) => {
      if (willDelete) {

        axios
      .delete(`http://localhost:3001/Producto/eliminar/${id}`)
      .then(() => {
        leerArticulos();
      })
      .catch((err) => {
        console.log(err);
      });  

        swal("su producto se a eliminado correctamente", {
          icon: "success",
        });
    } else { 
       swal("Operacion cancelada","su producto no se ha eliminado","info");
    }  
  
  });
  };
  const actualizarProducto = (id) => {
    navigate(`/actualizarProducto/${id}`);
  };
  const logout = () => {
    localStorage.clear();
    setUser(false);
    navigate("/");
  };

  return (
    <div>
      <div className="title-cards">
        <h2>Gestión de Categorías</h2>
        <div>
          <Link to='/crearCategoria'>
            <button className="bg-green-500 rounded-sm m-4 p-2">Nueva Categoría</button>
          </Link>
        </div>
      </div>
      <div className="container-card-admin">
        <div className="px-6 py-4">
          <table className="w-full border border-black">
            <thead className="border border-black">
              <tr className="border border-black">
                <th className="border border-black">Categorías</th>
                <th className="border border-black">Acciones</th>
              </tr>
            </thead>
            <tfoot>
              {categorias.map((categoria) => (
                <tr className="border border-black" key={categoria.id}>
                  <td className="border border-black">{categoria.nombre}</td>
                  <td className="border border-black text-center">
                    <div className="m-1">
                      <button onClick={() => eliminarCategoria(categoria.id)} className="bg-red-500 rounded-sm p-2 m-1">
                        <BsFillTrash3Fill />
                      </button>
                      <button onClick={() => actualizarCategoria(categoria.id)} className="bg-white rounded-sm p-2 m-1">
                        <BsPencilSquare />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="flex justify-center mt-4">
            <button
              disabled={currentPageCat === 0}
              onClick={() => handlePageCat(currentPageCat - 1)}
              className="bg-gray-200 hover:bg-gray-300 rounded-md py-1 px-3 mr-2"
            >
              Anterior
            </button>
            <span className="pr-2">{currentPageCat}</span>
            <button
              onClick={() => handlePageCat(currentPageCat + 1)}
              className="bg-gray-200 hover:bg-gray-300 rounded-md py-1 px-3"
            >
              Siguiente
            </button>

          </div>
        </div>
      </div>

      <div className="title-cards">
        <h2>Gestión de Productos</h2>
        <div>
          <Link to='/crearProducto'>
            <button className="bg-green-500 rounded-sm m-4 p-2">Nuevo Producto</button>
          </Link>
        </div>
      </div>
      <div className="container-card-admin">
        <div className="px-6 py-4">
          <table className="w-full border border-black">
            <thead className="border border-black">
              <tr className="border border-black">
                <th className="border border-black">Productos</th>
                <th className="border border-black">Acciones</th>
              </tr>
            </thead>
            <tfoot>
              {articulos.map((producto) => (
                <tr className="border border-black" key={producto.id}>
                  <td className="border border-black">{producto.nombre}</td>
                  <td className="border border-black text-center">
                    <div className="m-1">
                      <button onClick={() => eliminarProducto(producto.id)} className="bg-red-500 rounded-sm p-2 m-1">
                        <BsFillTrash3Fill />
                      </button>
                      <button onClick={() => actualizarProducto(producto.id)} className="bg-white rounded-sm p-2 m-1">
                        <BsPencilSquare />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="flex justify-center mt-4">
            <button
              disabled={currentPageProd === 0}
              onClick={() => handlePageProd(currentPageProd - 1)}
              className="bg-gray-200 hover:bg-gray-300 rounded-md py-1 px-3 mr-2"
            >
              Anterior
            </button>
            <span className="pr-2">{currentPageProd}</span>
            <button
              onClick={() => handlePageProd(currentPageProd + 1)}
              className="bg-gray-200 hover:bg-gray-300 rounded-md py-1 px-3"
            >
              Siguiente
            </button>
          
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="border border-black bg-sky-100 py-1 px-1 rounded-md">
          <div className="text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md text-secondary">
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;




