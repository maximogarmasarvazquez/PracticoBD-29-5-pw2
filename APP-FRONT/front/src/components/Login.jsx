import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginClient } from "../services/cliente.service";
import swel from "sweetalert";

function Login(){ 
 const navigate = useNavigate();
 const [emailCliente, setEmailCliente] = useState("");
 const [passwordCliente, setPasswordCliente] = useState("");
 
  const loginCliente = async () => {
    const res = await loginClient(emailCliente, passwordCliente)
    //console.log(`resultado: `, res);
    if (res.resultado) {
      swel("Bienvenido", "Usuario logueado correctamente", "success");
      navigate("/productos"); //redirecciona a la pagina de admin
    } else {
      swel("Error", "Usuario o contraseña incorrectos", "error");
    }
  };

//   const logoutCliente = () => {
//     //localStorage.removeItem("token");
//     //localStorage.removeItem("nombre");
//     localStorage.clear();
//     navigate("/"); //redirecciona a la pagina de home
//   };

    return(
        <div>
               <div className="bg-green-200 py-16 px-16 rounded-md">
                
                <div className=" bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer  p-3 m-2 rounded-md text-secondary ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
               Escriba su Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="email"
                value={emailCliente}
                onChange={(e)=>(setEmailCliente(e.target.value))}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
               Escriba su Contraseña
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
                value={passwordCliente}
                onChange={(e) => setPasswordCliente(e.target.value)}
              />
                  <button onClick={loginCliente}>Login</button>                   
                </div>
             </div>
          
        </div> 
    )
}

export default Login;