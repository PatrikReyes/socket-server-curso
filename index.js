const Server = require("./models/server");
require('dotenv').config()

// intancia de la clase que tiene la config del servidor y sockets
const server = new Server()

// lamamos el metodo para qeu se ejcute todo
server.execute()

