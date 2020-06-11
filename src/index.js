const express = require('express');

const app = express();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informaç±oes do Banco de Dados
 * POST: Criar informações no Banco de Dados
 * PUT: Alterar um conjunto de informações no Banco de Dados
 * PATCH: Alterar uma informação em específico no Banco de Dados
 * DELETE: Deletar uma informação do banco de dados
 * 
 */

app.get('/projetos', (request, response) =>{
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
    'Projeto 5',
  ])
});

app.post('/projetos', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
    'Projeto 5',
    'Projeto 6',
  ])
})

app.put('/projetos/:id', (request, response) => {
  return response.json([
    'Projeto 0',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
    'Projeto 5',
    'Projeto 6',
  ])
})

app.delete('/projetos/:id', (request, response) => {
  return response.json([
    'Projeto 0',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
    'Projeto 5',
  ])
})

app.listen(3333, () => {
  console.log("🚀 Server started and running on http://localhost:3333")
});