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

app.use(express.json())

app.get('/projetos', (request, response) => {
  return response.json([{
      id: "5df3eecd4f2c0a006b466f32",
      name: "alpha",
      status: "active",
      owner: "5da5d38795ffb700729fc0e4",
      createdAt: "2020-11-06T15:40:00.000Z",
      updatedAt: "2020-11-06T15:40:00.000Z",
    },
    {
      id: "5df3eecd4f2c0a006b466f32",
      name: "vldmrt",
      status: "done",
      owner: "5da5d38795ffb700729fc0e4",
      createdAt: "2020-11-06T15:40:00.000Z",
      updatedAt: "2020-11-06T15:40:00.000Z",
    },
    {
      id: "5df3eecd4f2c0a006b466f32",
      name: "gama",
      status: "future",
      owner: "5da5d38795ffb700729fc0e4",
      createdAt: "2020-11-06T15:40:00.000Z",
      updatedAt: "2020-11-06T15:40:00.000Z",
    },
  ])
});

app.post('/projetos', (request, response) => {
  const {
    name,
    status,
    owner,
    createdAt,
    updatedAt
  } = request.body;
  const id = "5df3eecd4f2c0a006b466f32";
  return response.json({
    id,
    name,
    status,
    owner,
    createdAt,
    updatedAt
  })
})

app.put('/projetos/:id', (request, response) => {
  const id = request.params.id;
  return response.json({
    id,
    name: "Delta",
    status: "active",
    owner: "5da5d38795ffb700729fc0e4",
    createdAt: "2020-11-06T15:40:00.000Z",
    updatedAt: "2020-11-06T15:40:00.000Z"
  })
})

app.delete('/projetos/:id', (request, response) => {
  const id = request.params.id;
  return response.json({
    id,
    name: "Delta",
    status: "deleted",
    owner: "5da5d38795ffb700729fc0e4",
    createdAt: "2020-11-06T15:40:00.000Z",
    updatedAt: "2020-11-06T15:40:00.000Z"
  })
})

app.listen(3333, () => {
  console.log("🚀 Server started and running on http://localhost:3333")
});