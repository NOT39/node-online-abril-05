import { StatusCodes } from 'http-status-codes'
import { ProjetosRepository } from '../../repositories/projetos-repository.js'

export async function criarProjeto(req, res) {
  const { titulo, descricao } = req.body

  if (!titulo) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      mensagem: "Titulo é obrigatório."
    })
  }

  const projetosRepository = new ProjetosRepository()
  const projetoCriado = await projetosRepository.criar({
    titulo,
    descricao,
    usuarioId: req.sub
  })

  return res.status(StatusCodes.CREATED).json({
    data: projetoCriado
  })
}