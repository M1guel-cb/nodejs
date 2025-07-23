const express = require("express");
const path = require("path");
const app = express();
const porta = 1000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/relogio", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "relogio.html"));
});

app.get("/sportv", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "pages", "sportv.html"));
});

app.listen(porta, () => {
    console.log("Servidor rodando na porta " + porta);
});
