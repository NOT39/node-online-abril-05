import express from "express";
import { StatusCodes } from "http-status-codes";

const projetos = [
  { id: 0, titulo: "Primeiro projeto", descricao: "Meu primeiro projeto" },
  { id: 1, titulo: "Segundo projeto", descricao: "Meu primeiro projeto" },
  { id: 2, titulo: "Terceiro projeto", descricao: "Meu primeiro projeto" }
]

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  return res.send("<h1>Olá, mundo!</h1>")
})

app.get("/projetos", (req, res) => {
  const { titulo } = req.query

  let projetosEncontrados = projetos

  if (titulo) {
    projetosEncontrados = projetos.filter((projeto) => {
      return projeto.titulo.toLowerCase().includes(titulo.toLowerCase())
    })
  }

  return res.json({
    data: projetosEncontrados
  })
})

app.post("/projetos", (req, res) => {
  const { titulo, descricao } = req.body

  if (!titulo) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      mensagem: "Titulo é obrigatório."
    })
  }

  const projetoCriado = {
    id: projetos[projetos.length - 1].id + 1,
    titulo,
    descricao
  }

  projetos.push(projetoCriado)

  return res.status(StatusCodes.CREATED).json({
    data: projetoCriado
  })
})

app.put("/projetos/:id", (req, res) => {
  const { id } = req.params
  const { titulo, descricao } = req.body

  const indiceProjeto = projetos.findIndex((projeto) => {
    return projeto.id === parseInt(id)
  })

  if (indiceProjeto < 0) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O projeto informado não foi encontrado."
    })
  }

  const projetoEncontrado = projetos[indiceProjeto]

  const novoProjeto = {
    ...projetoEncontrado,
    titulo: titulo ? titulo : projetoEncontrado.titulo,
    descricao: descricao ? descricao : projetoEncontrado.descricao
  }

  projetos[indiceProjeto] = novoProjeto

  return res.json({
    data: novoProjeto
  })
})

app.delete("/projetos/:id", (req, res) => {
  const { id } = req.params

  const indiceProjeto = projetos.findIndex((projeto) => {
    return projeto.id === parseInt(id)
  })

  if (indiceProjeto < 0) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O projeto informado não foi encontrado."
    })
  }

  projetos.splice(indiceProjeto, 1)

  return res.status(StatusCodes.NO_CONTENT).send()
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!")
})