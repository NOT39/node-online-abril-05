import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { StatusCodes } from 'http-status-codes'

import { UsuariosRepository } from '../../repositories/usuarios-repository.js'

export async function login(req, res) {
  const { email, senha } = req.body

  const usuariosRepository = new UsuariosRepository()
  
  const usuario = await usuariosRepository.pegarPorEmail(email)

  if (!usuario) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      mensagem: "Credenciais inválidas."
    })
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.hash_senha)

  if (!senhaCorreta) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      mensagem: "Credenciais inválidas."
    })
  }

  const usuarioSemSenha = {
    ...usuario,
    hash_senha: undefined
  }

  const token = jwt.sign(
    {
      sub: usuario.id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '24h'
    }
  )

  return res.json({
    data: usuarioSemSenha,
    token
  })
}