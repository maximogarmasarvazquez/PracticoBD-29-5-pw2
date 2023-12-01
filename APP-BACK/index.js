const express  = require('express');
const helmet  = require('helmet');
const cors  = require('cors');
const jwt = require('jsonwebtoken');

const app = express();



// Generacion de token

const palabraClave = "asdf234asdfasdfsdfg"

var token = jwt.sign(
  { 
    user: {
      id: 1,
      email: 'prueba@gmail.com',
    },
    rol: 'admin',
    layout:{
      colorBase : 'red'
    }
  }
  , palabraClave, { expiresIn: '1000h' }); 

console.log("**********");
console.log("**********");
console.log("token: ",token);
console.log("**********");
console.log("**********");

const  token2= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InBydWViYUBnbWFpbC5jb20ifSwicm9sIjoiYWRtaW4iLCJsYXlvdXQiOnsiY29sb3JCYXNlIjoicmVkIn0sImlhdCI6MTY5NzgxNDgwMSwiZXhwIjoxNzAxNDE0ODAxfQ.e4VYbMXmc71tqOoeoGsoZBWPuPiCb857Zif-0pJuhTM";

try {
  // codigo complejo
// decodificar el token
const decoded = jwt.verify(token2, palabraClave);

console.log("**********");
console.log("**********");
console.log("decoded: ",decoded);
console.log("**********");
console.log("**********");
}
catch(e) {
   console.log("Error *****: ",e.message);
// 
}
//biblioteca de seguridad helmet
app.use(helmet());

//biblioteca cors con direccion configurada
var corsOptions = {                   
   origin: [
    "http://localhost:3001",
    "http://localhost:5173",
    "http://localhost:4173",
  ],
  methods: 'GET,POST,PUT,DELETE', // Permitir todos los métodos HTTP
  allowedHeaders: '*', // Permitir todas las cabeceras (¡solo para fines de desarrollo!)
  optionsSuccessStatus: 200,

};

//filtro de direcciones
app.use(cors(corsOptions));

const port = require('./Config/env.js').PORT || 3001;

//formatear nuestras respuestas 
app.use(express.json());

// Cargar DB Modelos
const db = require('./Models/index.js');

//carga de rutas
require('./Routers/index.routes.js')(app);

// conectar con nuestra BD
db.sequelize
  .sync( ) // # {alter:true} actualizar la BD , # {Frorce:true} borrar la BD
  .then((result) => {
    console.log('conexion exitosa');
  });


app.listen(port, () => {
    console.log(`server en pueto ${port}`)
});
