import { ProjetosRepository } from '../../repositories/projetos-repository.js'

export async function pegarProjetosUsuario(req, res) {
  const { id } = req.params
  
  const projetosRepository = new ProjetosRepository()
  const projetosEncontrados = await projetosRepository.pegarProjetoPorUsuarioId(id)

  return res.json({
    data: projetosEncontrados
  })
}