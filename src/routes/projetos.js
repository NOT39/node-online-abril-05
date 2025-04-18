import { Router } from 'express';
import { pegarProjetos } from '../controllers/projetos/pegar-projetos.js';
import { criarProjeto } from '../controllers/projetos/criar-projeto.js';
import { atualizarProjeto } from '../controllers/projetos/atualizar-projeto.js';
import { apagarProjeto } from '../controllers/projetos/apagar-projeto.js';
import { pegarProjetoPorId } from '../controllers/projetos/pegar-projeto-por-id.js';
import { verificarJwt } from '../middlewares/verificar-jwt.js';

export const projetosRoutes = Router()

projetosRoutes.get("/projetos", verificarJwt, pegarProjetos)

projetosRoutes.get("/projetos/:id", verificarJwt, pegarProjetoPorId)

projetosRoutes.post("/projetos", verificarJwt, criarProjeto)

projetosRoutes.put("/projetos/:id", verificarJwt, atualizarProjeto)

projetosRoutes.delete("/projetos/:id", verificarJwt, apagarProjeto)