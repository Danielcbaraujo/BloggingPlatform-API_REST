const express = require("express");
const postRoutes = require("./routes/postRoutes");
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota de teste
app.use("/posts",postRoutes,); /*"Toda requisição que começar com /posts deve ser enviada para o arquivo postRoutes.js."*/

module.exports = {app}
