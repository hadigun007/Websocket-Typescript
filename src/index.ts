import WebSocketServer from "ws";
import Chanel from "./enum/chanel.eum";
import Database from "./database/database";

const wss = new WebSocketServer.Server({ port: 8080 });
const db = new Database();

// request format
// const r = {
//   "channel":Chanel.XCROW,
//   "message":"Haii"
// }

// list of users
var CLIENTS: { send: (arg0: string) => void; }[] | WebSocketServer[]=[];
var id;

wss.on("connection", (ws) => {
  console.log("new client connected"); // sending message to client
  ws.send("Welcome, you are connected!", ); //on message from client

  id = Math.random();
  console.log('connection is established : ' + id);
  CLIENTS[id] = ws;
  CLIENTS.push(ws);

  console.log(CLIENTS.length);
  

  ws.on("message", (data) => {
      console.log(`Client has sent us: ${data}`);
      ws.send(`Client has sent us: ${data}`); //on message from client

      for (var j=0; j < CLIENTS.length; j++) {
        // Отправить сообщения всем, включая отправителя
        console.log('FOR : ', 'message');
        CLIENTS[j].send('message');
    }
  }); // handling what to do when clients disconnects from server

  ws.on("close", () => {
    console.log("the client has connected");
  }); // handling client connection error

  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});

console.log("The WebSocket server is running on port 8080");
db.connect()
