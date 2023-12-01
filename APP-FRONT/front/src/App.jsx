import { Routes, Route, Outlet, useNavigate, Navigate } from "react-router-dom";
import Regitro from "./components/RegistroCliente";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Contactar from "./components/Contactar";
import ProductDetail from "./components/ProductDetail";
import Admin from "./components/Admin";
import Error from "./components/Error404";
import Home from "./components/Home";
import Productos from "./components/Productos";
import Login from "./components/Login";
import "./estilos/App.css";
import Carrito from "./components/Carrito";
import { useUserContext } from "./context/userContext";
import LoginUsuario from "./components/LoginUsuario";
import AdmNuevoProducto from "./components/admNuevoProducto";
import AdmActualizarProducto from "./components/admActualizarProducto";
import AdmNuevaCategoria from "./components/admNuevaCategoria";
import AdmActualizarCategoria from "./components/admActualizarCategoria";



function App() {

  const { user, setUser } = useUserContext();

  const navigate = useNavigate();

  const logout = () => {
    //localStorage.removeItem("token");
    //localStorage.removeItem("nombre");
    localStorage.clear();
    setUser(false);
    navigate("/"); //redirecciona a la pagina de home
  };



  return (
    <div >
      <Routes>
        
        <Route
          path="/"
          element={        
            <div  >
              <Menu authOK={user}   />
              <div>
                <Outlet />
              </div>
              <Footer />
            </div>
          }
        >
            <Route
            index
            element={
              <div>
                <Home />
              </div>
            }
          ></Route>
        
      
         
        
          <Route
          path="loginCliente"
          element={ <Login />}
        />

          <Route
          path="registro"
          element={ <Regitro />}
        />
           <Route
            path="contactar"
            element={            
                <Contactar/>        
            }
          />
          
          <Route 
            path="productos"
            element={
              <div>                
                <Outlet />
              </div>
            }
          >
            <Route index element={<Productos />} />

            <Route path="info/:id"  element={<ProductDetail />} />
          </Route>
          <Route path="carrito" element={<Carrito/>} />

      
       
          <Route
            path="logout"
            element={
              <div className="bg-sky-100 py-16 px-16 rounded-md">
                <div className=" bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer  p-3 m-2 rounded-md text-secondary ">
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
            }
          /> 

        <Route path="loginUser"  element={ <LoginUsuario />}/>  

          <Route  
            path="admin"
            element={
              user ? <Admin /> : <Navigate to="/loginUser" />}
          /> 
              <Route path="crearProducto" element={<AdmNuevoProducto />} />
              <Route path="actualizarProducto/:id" element={<AdmActualizarProducto />} />

              <Route path="crearCategoria" element={<AdmNuevaCategoria />} />
              <Route path="actualizarCategoria/:id" element={<AdmActualizarCategoria />} />

            
          
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

         
        