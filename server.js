import { Server } from "socket.io";
import http from "http";

const server = http.createServer();
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("front", (message) => {
    console.log(`Mensaje recibido en "mi_canal": ${message}`);

    // Emitir el mensaje a todos los clientes conectados
    io.emit("front", message);
    console.log("Mensaje enviado a todos los clientes");
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(4000, () => {
  console.log("Servidor Socket.IO escuchando en http://localhost:4000");
});
