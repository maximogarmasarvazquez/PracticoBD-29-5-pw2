import { useState } from "react";
import { registroClient } from "../services/cliente.service";
import { useNavigate } from "react-router-dom";


function Registro() {

  const navigate = useNavigate();
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [email, setEmailCliente] = useState("");
  const [direccion, setDireccion] = useState("");
  const [dni, setDniCliente] = useState("");
  const [password, setPasswordCliente] = useState("");
  const [password2, setPasswordCliente2] = useState("");

  const registroCliente = async () => {
    const res = await registroClient(nombreCompleto, email, direccion, dni, password);
    if (res.resultado) {
      navigate("/loginCliente");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  function validarPassword() {
    var vacia = "";
    if (password === vacia || password2 === vacia || nombreCompleto === vacia || email === vacia || direccion === vacia || dni === vacia) {
      alert("Los campos no pueden estar vacíos");
    } else if (password !== password2) {
      alert("Las contraseñas no coinciden");
    } else {
      registroCliente();
    }
  }



  return (
    <div>
        
      <div className="bg-blue-200  py-16 px-16">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="bg-blue-300 text-secondary w-full max-w-md hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md text-secondary flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreCompleto">
                Nombre Completo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombreCompleto"
                type="text"
                placeholder="Nombre completo"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmailCliente(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
                Direccion
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="direccion"
                type="text"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
                DNI
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dni"
                type="text"
                placeholder="DNI"
                value={dni}
                onChange={(e) => setDniCliente(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Contraseña
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPasswordCliente(e.target.value)}
              />
              {password === '' && <p className="text-red-500 text-xs italic">Por favor elige una Contraseña.</p>}{/*si password es vacio muestra el mensaje */}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
                Repita su Contraseña
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password2"
                type="password"
                placeholder="Contraseña"
                value={password2}
                onChange={(e) => setPasswordCliente2(e.target.value)}
              />
               {password2 === '' && <p className="text-red-500 text-xs italic">Por favor elige una Contraseña.</p>}{/*si password es vacio muestra el mensaje */}
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => validarPassword()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Registrarse
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
