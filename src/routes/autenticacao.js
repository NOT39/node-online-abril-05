import { Router } from 'express';
import { login } from '../controllers/autenticacao/login.js';

export const autenticacaoRoutes = Router()

autenticacaoRoutes.post("/auth/login", login)