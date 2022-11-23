import io from 'socket.io-client';

const socket = io('http://localhost:3002')

function Socket() {
    return(
        <div>

        <h1>Socket Funcionando</h1>

        </div>
    ) 
}

export default Socket;