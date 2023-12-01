import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/Usuario.service";
import swel from "sweetalert";
import { useUserContext } from "../context/userContext";

function Login(){ 
  const { setUser } = useUserContext();

 const navigate = useNavigate();
 const [emailUsuario, setEmailUsuario] = useState("");
 const [passwordUsuario, setPasswordUsuario] = useState("");

  const loginUsuario = async () => {
    
      const res = await loginUser(emailUsuario, passwordUsuario)

    if (res.resultado) { 
     
         setUser(res);
         
         console.log(`resultado: `, res);

      swel("Bienvenido administrador", "admin logueado correctamente", "success");
      navigate("/admin"); //redirecciona a la pagina de admin
    } else {
      swel("Error", "Usuario o contraseña incorrectos", "error");
    }
  };


 
    return(
        <div>
               <div className="bg-gray-200 py-16 px-16 rounded-md">
                
                <div className=" bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer  p-3 m-2 rounded-md text-secondary ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
               Escriba su Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="email"
                value={emailUsuario}
                onChange={(e)=>(setEmailUsuario(e.target.value))}
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
               Escriba su Contraseña
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
                value={passwordUsuario}
                onChange={(e) => setPasswordUsuario(e.target.value)}
              />
                  <button onClick={loginUsuario}>Login</button>                   
                </div>
             </div>
          
        </div> 
    )
}

export default Login;