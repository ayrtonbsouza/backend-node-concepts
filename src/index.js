// 1 - Importação do Express dentro de uma Constante chamada "express";
const express = require('express');

// 2 - Declara uma constante app que carregará uma instância do Express;
const app = express();

// 4 - Declaração de recursos da API
app.get('/hello-world', (request, response) =>{
  return response.json({
    message: "Hello, world!"
  })
})

// 3 - Cria um listener para ser possível acessar a API por um navegador, por exemplo;
app.listen(3333, () => {
  console.log("🚀 Server started and running on http://localhost:3333")
});