import { StatusCodes } from 'http-status-codes'
import { ProjetosRepository } from '../../repositories/projetos-repository.js'

export async function pegarProjetoPorId(req, res) {
  const { id: _id } = req.params
  const id = parseInt(_id)

  const projetosRepository = new ProjetosRepository()
  const projeto = await projetosRepository.pegarPorId(id)

  if (!projeto) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O projeto informado não foi encontrado."
    })
  }

  return res.json({
    data: projeto
  })
}