import { ProjetosRepository } from '../../repositories/projetos-repository.js'

export async function pegarProjetos(req, res) {
  const { titulo } = req.query

  const projetosRepository = new ProjetosRepository()
  const projetosEncontrados = await projetosRepository.listar(titulo)

  return res.json({
    data: projetosEncontrados
  })
}