const express = require("express");
const path = require("path");
const app = express();
const porta = 1000;

app.get("/home", (req, res) => {
    res.status(200)
    res.send("<h1>Hello Node</h1>");
});

app.get("/users", (req, res) => {
    res.status(200)
    res.sendFile(path.join(__dirname, "src/pages/teste.html"))
});

app.listen(porta, () => console.log("Servidor rodando na porta " + porta));
