import { StatusCodes } from 'http-status-codes'
import { UsuariosRepository } from '../../repositories/usuarios-repository.js'

export async function pegarUsuarioPorId(req, res) {
  const { id } = req.params

  const usuariosRepository = new UsuariosRepository()
  const usuario = await usuariosRepository.pegarPorId(id)

  if (!usuario) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O usuario informado não foi encontrado."
    })
  }

  const usuarioSemSenha = {
    ...usuario,
    hash_senha: undefined
  }

  return res.json({
    data: usuarioSemSenha
  })
}