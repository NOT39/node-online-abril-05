import { StatusCodes } from 'http-status-codes'
import { prisma } from '../../lib/prisma.js'

export async function atualizarProjeto(req, res) {
  const { id } = req.params
  const { titulo, descricao } = req.body

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

  const novoProjeto = {
    titulo: titulo ? titulo : projeto.titulo,
    descricao: descricao ? descricao : projeto.descricao
  }

  const projetoAtualizado = await prisma.projeto.update({
    where: {
      id: parseInt(id)
    },
    data: novoProjeto
  })

  return res.json({
    data: projetoAtualizado
  })
}