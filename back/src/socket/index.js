import  express from 'express';
import morgan from "morgan";
import {Server as SocketServer} from "socket.io";
import  http from "http";
import cors from 'cors';
import {PORT} from './config.js';



 
      server
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

app.use(cors())
app.use(morgan("dev"));



// io.on('connection', ()=>{
//     console.log("Un User Conectado!")
// })


app.listen(PORT);
console.log("Server iniciado en puerto ",  PORT );