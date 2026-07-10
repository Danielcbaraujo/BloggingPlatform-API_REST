require("dotenv").config();

console.log("1 - Iniciando servidor");

const app = require("./app");

console.log("2 - App carregado");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});

console.log("3 - Listen executado");
