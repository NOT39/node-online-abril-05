import { Router } from 'express';
import { pegarProjetos } from '../controllers/projetos/pegar-projetos.js';
import { criarProjeto } from '../controllers/projetos/criar-projeto.js';
import { atualizarProjeto } from '../controllers/projetos/atualizar-projeto.js';
import { apagarProjeto } from '../controllers/projetos/apagar-projeto.js';
import { pegarProjetoPorId } from '../controllers/projetos/pegar-projeto-por-id.js';

export const projetosRoutes = Router()

projetosRoutes.get("/projetos", pegarProjetos)

projetosRoutes.get("/projetos/:id", pegarProjetoPorId)

projetosRoutes.post("/projetos", criarProjeto)

projetosRoutes.put("/projetos/:id", atualizarProjeto)

projetosRoutes.delete("/projetos/:id", apagarProjeto)