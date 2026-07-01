const express = require("express");
const postRoutes = require("./routes/postRoutes");
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rota de teste
app.use("/posts", postRoutes);

module.exports = app;
