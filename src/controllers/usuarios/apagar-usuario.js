import { StatusCodes } from 'http-status-codes'
import { UsuariosRepository } from '../../repositories/usuarios-repository.js'

export async function apagarUsuario(req, res) {
  const { id } = req.params

  const usuariosRepository = new UsuariosRepository()
  const usuario = usuariosRepository.pegarPorId(id)

  if (!usuario) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O usuario informado não foi encontrado."
    })
  }

  await usuariosRepository.apagar(id)

  return res.status(StatusCodes.NO_CONTENT).send()
}