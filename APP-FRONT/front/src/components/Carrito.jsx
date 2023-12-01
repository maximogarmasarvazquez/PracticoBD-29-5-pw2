import "../estilos/Carrito.css"; // Importa el archivo CSS
 import  { useEffect, useState } from "react";
 import { BsFillTrash3Fill  } from "react-icons/bs";
 import swal from 'sweetalert';
 import {useThemeContext} from "../context/userContext";
 import '../estilos/modeDark.css';

 function Carrito() {
  const {contextTheme} = useThemeContext()    
    const [carritoParseado, setCarritoParseado] = useState(null);
    let Total = 0;
   useEffect(() => {
     async function obtenerCarrito() {
       const carrito = localStorage.getItem("carrito");
       if (carrito) {
         const carritoParseado = JSON.parse(carrito);
         setCarritoParseado(carritoParseado);
         
       } 
      

     }
     obtenerCarrito();
   }, []);

   useEffect(() => {
    console.log(carritoParseado);
  }, [carritoParseado]);
 
   function llamarCarrito() {
   
     if (!carritoParseado || !carritoParseado.productos) {
       return null;
     }

     return carritoParseado.productos.map((e) => (
       <tr key={e.id}>
         <td>{e.id}</td>
         <td>{e.nombre}</td>
         <td>${e.precio}</td>
         <td>{e.cantidad}</td>
         <td>${ e.precio * e.cantidad}{sacarTotal(e.precio,e.cantidad)}</td>
         <td className="w-1/4">
          <button onClick={() => eliminar(e.id)} className="bg-red-500 rounded-sm p-2"><BsFillTrash3Fill /></button>
          <button onClick={() => disminuir(e.id)} className="bg-gray-300 rounded-sm ml-1  p-2">-</button>
          <button onClick={() => incrementar(e.id)} className="bg-gray-300 rounded-sm ml-1  p-2">+</button></td>
       </tr>

     ));
   }

   function sacarTotal(precio,cantidad){
     Total = Total + (precio * cantidad);

   }

   function vaciarCarrito(){
    swal({
      title: "seguro quiere vaciar el carrito?",
      icon: "warning",
      buttons: ["Cancelar", "vaciar"],
      dangerMode: true,
   })
    .then((willDelete) => {
      if (willDelete) {
        console.log(willDelete);

        localStorage.removeItem("carrito");
        setCarritoParseado(null);

        swal("el carrito se ha vaciado correctamente", {
          icon: "success",
        });
    } else { 
       swal("Operacion cancelada","el carrito no se ha vaciado","info");
    }  
  });
     
    }

   function disminuir(id){
    const carrito = localStorage.getItem("carrito");
    const carritoParseado = JSON.parse(carrito);

   const product = carritoParseado.productos.find((producto) => producto.id === id)

    if(product.cantidad == 1){
      eliminar(id);
    }else{    
    product.cantidad = product.cantidad - 1;
    localStorage.setItem("carrito", JSON.stringify(carritoParseado));
    setCarritoParseado(carritoParseado);
    }
   }

   function incrementar(id){
    const carrito = localStorage.getItem("carrito");
    const carritoParseado = JSON.parse(carrito);

   const product = carritoParseado.productos.find((producto) => producto.id === id)    
    product.cantidad = product.cantidad + 1;
    localStorage.setItem("carrito", JSON.stringify(carritoParseado));
    setCarritoParseado(carritoParseado);
    
   }

   function eliminar(id){
        
    swal({
      title: "seguro quiere eliminar este producto?",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
   })
    .then((willDelete) => {
      if (willDelete) {
        console.log(willDelete);

        const productosEnCarrito = carritoParseado.productos.filter(         
      (producto) => producto.id != id);

      const nuevoCarrito = {...carritoParseado}

      nuevoCarrito.productos = productosEnCarrito;

      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      setCarritoParseado(nuevoCarrito);

        swal("su producto se a eliminado correctamente", {
          icon: "success",
        });
    } else { 
       swal("Operacion cancelada","su producto no se ha eliminado","info");
    }  
  });
  }
 
  return (
  
  <div className="carrito-container">  
        <div id={contextTheme}>
        <div className="font-bold text-xl mb-2 text-center">Carrito</div>
        <div className=" sm:px-6 py-2">
          <div>
            <table className="cart-table w-full">
              <thead className="hidden sm:table-header-group">
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              
              <tbody className="block sm:table-row-group">
                {llamarCarrito()}
              </tbody>
              <tfoot className="block sm:table-footer-group">
                <tr>
                  <td colSpan="4" className="text-right">Total Final:</td>
                  <td className="text-right">${Total}</td>
                  <td className="text-center">
                    <button className="bg-slate-500 rounded-sm p-2" onClick={() => vaciarCarrito()}>Vaciar carrito</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
 }
 
 export default Carrito;
 