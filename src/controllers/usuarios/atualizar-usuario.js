import { StatusCodes } from 'http-status-codes'
import bcrypt from 'bcryptjs'

import { UsuariosRepository } from '../../repositories/usuarios-repository.js'

export async function atualizarUsuario(req, res) {
  const { id } = req.params
  const { nome, email, senha } = req.body

  const usuariosRepository = new UsuariosRepository()
  const usuario = await usuariosRepository.pegarPorId(id)

  if (!usuario) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O usuario informado não foi encontrado."
    })
  }

  if (email) {
    const usuarioEncontradoComEmail = await usuariosRepository.pegarPorEmail(email)

    if (usuarioEncontradoComEmail) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        mensagem: "Já existe um usuário registrado com o email informado."
      })
    }
  }

  const novoUsuario = {
    nome: nome ? nome : usuario.nome,
    hash_senha: senha 
      ? await bcrypt.hash(senha, 6) 
      : usuario.hash_senha,
    email: email ? email : usuario.email
  }

  const { hash_senha, ...usuarioAtualizado } = await usuariosRepository.atualizar(id, novoUsuario)

  return res.json({
    data: usuarioAtualizado
  })
}