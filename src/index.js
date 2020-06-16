const express = require('express');
const { uuid } = require('uuidv4');

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

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Filtros e Paginação
  * Route Params: Identificar Recursos (PUT/DELETE)
  * Request Body: Conteúdo para POST ou PUT (JSON)
  */

app.use(express.json())

const projetos = []

app.get('/projetos', (request, response) => {
  const { owner } = request.query;
  const resultados = owner ? projetos.filter( projeto => projeto.owner.includes(owner) ) : projetos;
  return response.json(resultados);
});

app.post('/projetos', (request, response) => {
  const {
    name,
    status,
    owner,
    createdAt,
    updatedAt
  } = request.body;
  const projeto = {
    id: uuid(),
    name,
    status,
    owner,
    createdAt,
    updatedAt
  }
  projetos.push(projeto);
  return response.json(projeto);
})

app.put('/projetos/:id', (request, response) => {
  const { 
    name,
    status,
    owner,
    createdAt,
    updatedAt
   } = request.body;
  
   const id = request.params.id;
  
  const indexProjeto = projetos.findIndex( projeto => projeto.id === id)
  
  if (indexProjeto < 0) {
    return response.status(400).json({ error: 'Projeto não encontrado' })
  }

  const projeto = {
    id,
    name,
    status,
    owner,
    createdAt,
    updatedAt
  }

  projetos[indexProjeto] = projeto;

  return response.json(projeto)
})

app.delete('/projetos/:id', (request, response) => {
  const id = request.params.id;

  const indexProjeto = projetos.findIndex( projeto => projeto.id === id)
  
  if (indexProjeto < 0) {
    return response.status(400).json({ error: 'Projeto não encontrado' })
  }

  projetos.splice(indexProjeto, 1)

  return response.status(204).send()
})

app.listen(3333, () => {
  console.log("🚀 Server started and running on http://localhost:3333")
});