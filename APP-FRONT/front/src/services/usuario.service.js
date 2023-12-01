import axios from "axios";
const API_URL = "http://localhost:3001";

export async function loginUser(email, password) {



  let data = {};
      await axios.post(`${API_URL}/usuario/login`, {email, password} )
      .then((response) => {
      // Actualizar el estado con los datos obtenidos
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("nombre", response.data.nombre);
      localStorage.setItem("nombre", response.data.nombre);
      localStorage.setItem("sigla",  response.data.sigla);

      data = response.data;


      //console.log(localStorage.getItem("token"));
      //console.log(localStorage.getItem("nombre"));
    })
    .catch((error) => {
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
      console.error("Error al obtener la lista de productos:", error);
    });
  return data
}
