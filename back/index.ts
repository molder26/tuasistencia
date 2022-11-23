const server = require("./src/app");
const { conn } = require("./src/db");
require("dotenv").config();
// const { Server } = require("socket.io");
// const io = new Server(server);
const { PORT } = process.env;
const socketIO = require('socket.io');
const http = require('http')

const httpServer = http.createServer(server);
let io = socketIO(httpServer)

io.on('connection', (socket:any) => {
    console.log('a user connected')
})

io.listen(10500);


conn.sync({ force: false}).then(() => {
	console.log('Modelos Sincronizados');
    server.listen(PORT || 3001, () => {
        console.log(`%s listening at ${PORT || 3001}`); // eslint-disable-line no-console
    });
});
