import "dotenv/config"

import express from "express";
import { projetosRoutes } from './routes/projetos.js';
import { usuariosRoutes } from './routes/usuarios.js';
import { autenticacaoRoutes } from './routes/autenticacao.js';

export const app = express()

const projetos = [
  { id: 0, titulo: "Primeiro projeto", descricao: "Meu primeiro projeto" },
  { id: 1, titulo: "Segundo projeto", descricao: "Meu primeiro projeto" },
  { id: 2, titulo: "Terceiro projeto", descricao: "Meu primeiro projeto" }
]

app.use(express.json())

app.get("/", (req, res) => {
  return res.send("<h1>Olá, mundo!</h1>")
})

app.use(projetosRoutes)
app.use(usuariosRoutes)
app.use(autenticacaoRoutes)
