import "dotenv/config"

import express from "express";
import cors from 'cors'

import { projetosRoutes } from './routes/projetos.js';
import { usuariosRoutes } from './routes/usuarios.js';
import { autenticacaoRoutes } from './routes/autenticacao.js';

export const app = express()

app.use(cors({
  origin: "*",
  allowedHeaders: ["Authorization", "Content-Type"],
}))

app.use(express.json())

app.use(projetosRoutes)
app.use(usuariosRoutes)
app.use(autenticacaoRoutes)
