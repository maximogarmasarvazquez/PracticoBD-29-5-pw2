import axios from "axios";
const API_URL = "http://localhost:3001";

export async function loginClient(email, password) {
  let data = {};
      await axios.post(`${API_URL}/cliente/login`, {email, password})
      .then((response) => {
      // Actualizar el estado con los datos obtenidos
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("nombreCompelto", response.data.nombreCompleto);
      data = response.data;
      //console.log(localStorage.getItem("token"));
      //console.log(localStorage.getItem("nombre"));
    })
    .catch((error) => {
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
      console.error("Error al logearse:", error);
    });
  return data
}


export async function registroClient(nombreCompleto, email, direccion, dni, password) {
  let data = {};
      await axios.post(`${API_URL}/cliente/nuevo`, {nombreCompleto, email, direccion, dni, password})
      .then((response) => {
      // Actualizar el estado con los datos obtenidos
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("nombreCompelto", response.data.nombreCompleto);
      data = response.data;
      //console.log(localStorage.getItem("token"));
    })
    .catch((error) => {
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
      console.error("Error al registrarse:", error);
    });
  return data
}
