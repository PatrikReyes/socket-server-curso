class Sockets {
    constructor(io) {
        this.io = io;

        this.socketsEvents()
    }

    socketsEvents() {

        // On connection
        this.io.on('connection', (socket) => {

            // on mensaje-cliente
            socket.on('mensaje-cliente', (data) => {
                console.log(data)
                this.io.emit('mensaje-from-server', data)
            })
        });

    }
}
module.exports = Sockets;