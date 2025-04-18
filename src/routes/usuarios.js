import { Router } from 'express';
import { pegarUsuarios } from '../controllers/usuarios/pegar-usuarios.js';
import { pegarUsuarioPorId } from '../controllers/usuarios/pegar-usuario-por-id.js';
import { criarUsuario } from '../controllers/usuarios/criar-usuario.js';
import { apagarUsuario } from '../controllers/usuarios/apagar-usuario.js';
import { atualizarUsuario } from '../controllers/usuarios/atualizar-usuario.js';

export const usuariosRoutes = Router()

usuariosRoutes.get("/usuarios", pegarUsuarios)
usuariosRoutes.get("/usuarios/:id", pegarUsuarioPorId)

usuariosRoutes.post("/usuarios", criarUsuario)

usuariosRoutes.put("/usuarios/:id", atualizarUsuario)

usuariosRoutes.delete("/usuarios/:id", apagarUsuario)