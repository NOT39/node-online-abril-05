import { StatusCodes } from 'http-status-codes'
import { ProjetosRepository } from '../../repositories/projetos-repository.js'

export async function apagarProjeto(req, res) {
  const { id: _id } = req.params
  const id = parseInt(_id)

  const projetosRepository = new ProjetosRepository()
  const projeto = projetosRepository.pegarPorId(id)

  if (!projeto) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O projeto informado não foi encontrado."
    })
  }

  await projetosRepository.apagar(id)

  return res.status(StatusCodes.NO_CONTENT).send()
}