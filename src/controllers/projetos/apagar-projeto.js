import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../lib/prisma.js'

export async function apagarProjeto(req, res) {
  const { id } = req.params

  const projeto = await prisma.projeto.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (!projeto) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O projeto informado não foi encontrado."
    })
  }

  await prisma.projeto.delete({
    where: {
      id: parseInt(id)
    }
  })

  return res.status(StatusCodes.NO_CONTENT).send()
}