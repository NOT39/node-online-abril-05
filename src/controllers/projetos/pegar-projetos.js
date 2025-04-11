import { prisma } from '../../lib/prisma.js'

export async function pegarProjetos(req, res) {
  const { titulo } = req.query

  const projetosEncontrados = await prisma.projeto.findMany({
    where: {
      titulo: {
        contains: titulo
      },
    }
  })

  return res.json({
    data: projetosEncontrados
  })
}