const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const manageWit = require("./middleware");
const chatRobot = require("./robot");
const enlace = "http://localhost:4200/products"

var Table = require("cli-table");

const tableChat = new Table({
    head: ["Info", "Valor"],
    colWidths: [10, 100]
});

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

const { Server } = require("socket.io");
const io = new Server(server,  {
    cors: {
      origin: '*',
    }
});
let indexChat = 0;
io.on("connection", function(socket) {
    socket.on("ask", async (data) => {    
        // Algoritmo que permite mapear la respuesta de WIT

        let responseWit = await manageWit(data["msg"]);
        let serverResponse = await chatRobot(responseWit, indexChat, enlace);
        
        tableChat.push(
            {"Usuario": data["msg"]},
            {"Intents": JSON.stringify(responseWit["intents"])},
            {"Traits": JSON.stringify(responseWit["traitsVal"])},
            {"Entities": JSON.stringify(responseWit["entities"])},
            {"Servidor": serverResponse},
            {"---": "-------------"}
        );
        
        console.log(tableChat.toString());

        socket.emit("response", {
            "msg": serverResponse
        });
        indexChat++;
    });
});

server.listen(4000, () => console.log("corriendo en el puerto 4000"));