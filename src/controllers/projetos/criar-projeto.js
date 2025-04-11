import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../lib/prisma.js'

export async function criarProjeto(req, res) {
  const { titulo, descricao, usuarioId } = req.body

  if (!titulo) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      mensagem: "Titulo é obrigatório."
    })
  }

  const projetoCriado = await prisma.projeto.create({
    data: {
      titulo,
      descricao,
      usuarioId
    }
  })

  return res.status(StatusCodes.CREATED).json({
    data: projetoCriado
  })
}