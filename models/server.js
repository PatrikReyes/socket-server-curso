const express = require('express');
const http = require('http');
const socketio = require('socket.io')
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app)
        this.io = socketio(this.server, {/* configs */})
    }

    configurarSockets(){
       new Sockets(this.io)
    }

    middlerwares(){
        this.app.use(express.static(path.resolve( __dirname, '../public' )))
    }

    execute() {
        this.middlerwares();
        this.configurarSockets();
        this.server.listen(this.port, () => {
            console.log('Desde class en el ', this.port)
        })
    }


}

module.exports = Server;