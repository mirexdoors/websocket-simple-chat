import {WebSocketServer} from 'ws';
import {v4 as uuid} from "uuid";

const clients = {};

const wsServer =  new WebSocketServer({port: 8000});
wsServer.on('connection', (ws) => {
    const id = uuid();
    clients[id] = ws;
    console.log(`New client ${id} connected`);

    ws.on('message', (message) => {

    });

    ws.on('close', () => {
        delete clients[id];
        console.log(`Client ${id} closed`);
    });
});


