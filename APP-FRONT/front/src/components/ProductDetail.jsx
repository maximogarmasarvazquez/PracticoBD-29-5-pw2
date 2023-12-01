import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../estilos/DetalleDeProductos.css" 
import swal from 'sweetalert';
import {useThemeContext} from "../context/userContext";
import '../estilos/modeDark.css';

function ProductDetail() {
  const {contextTheme} = useThemeContext()    

  const { id } = useParams();  // Obtenemos el parámetro dinámico ":id" de la URL  ( /productos/info/2)


const [articulo, setArticulo] = useState([]);//valor inicial array vacio
const [contador, setContador] = useState(1);

 
  const leerArticulos = () => {
    axios//nos permite hacer peticiones a un enlace HTTP
      .get(`http://localhost:3001/Producto/filtrar/id/${id}`)
      .then((res) => {
        setArticulo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // hooks
  useEffect(() => {//le indicamos que se ejecute cuando se renderize el componente como al inicio o cuando se modifica el estado
    leerArticulos();
  }, []);//##averiguar que hace el array vacio

  const product = articulo[0];

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  let Destacado;
  
  if(product.destacado==1){
     Destacado="Si"}
    else{
       Destacado="No"
    }

    function cambiarPrecio(){
      if(contador < 1){
        setContador(1);
      }
      let precio=product.precio;
      let nuevoPrecio=precio*contador;
      return nuevoPrecio;
    }

    function crearCarrito(){
      const carrito = {
        productos: [],
        total: 0,
      };
      carrito.productos.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: contador,
        total: product.precio * contador,
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function actualizarCarrito(carrito){
      const carritoParseado = JSON.parse(carrito);
        const productoEnCarrito = carritoParseado.productos.find(
          (producto) => producto.id === product.id
        );
        if (productoEnCarrito) {
          productoEnCarrito.cantidad = parseInt(productoEnCarrito.cantidad) + parseInt(contador);
          productoEnCarrito.total = productoEnCarrito.cantidad * product.precio;
          localStorage.setItem("carrito", JSON.stringify(carritoParseado));
        }else{
          carritoParseado.productos.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: contador,
            total: product.precio * contador,
          });
          localStorage.setItem("carrito", JSON.stringify(carritoParseado));
        }
    } 

    function AgregarProducto(){
      const carrito = localStorage.getItem("carrito");
      if (carrito) {
        actualizarCarrito(carrito);
      } else {
      crearCarrito();
    }
    swal("Carrito", "Producto agregado correctamente", "success");

    }

  return (  
    <div id={contextTheme}> 

    <div className="contenedor-card"> 
      <div className="px-6 py-4  rounded overflow-hidden shadow-lg">
          <img src={product.imagen}  className="mx-auto h-64 object-cover " alt={product.nombre} />      
          <h2 className=" card-nombre font-bold text-xl mb-2">{product.nombre}</h2>
          <div className="detalle">
          <p>Precio: ${cambiarPrecio(product.precio)}</p>
          <p>Destacado: {Destacado}</p>
        </div>
        <div className="enlace">
         <Link  to="/productos">Volver a la lista de productos</Link>
        </div>
        <button className="p-4 bg-black text-white" onClick={() =>AgregarProducto()}>Agregar carrito</button>
        <input className="p-4 bg-black text-white"
                type="number"
                value={contador}
                onChange={(e) => setContador(e.target.value)}
               />
      </div>
    </div>
    </div>
  );
}

export default ProductDetail;

