import { StatusCodes } from 'http-status-codes'
import { ProjetosRepository } from '../../repositories/projetos-repository.js'

export async function atualizarProjeto(req, res) {
  const { id: _id } = req.params
  const id = parseInt(_id)
  const { titulo, descricao } = req.body

  const projetosRepository = new ProjetosRepository()
  const projeto = await projetosRepository.pegarPorId(id)

  if (!projeto) {
    return res.status(StatusCodes.NOT_FOUND).json({
      mensagem: "O projeto informado não foi encontrado."
    })
  }

  const novoProjeto = {
    titulo: titulo ? titulo : projeto.titulo,
    descricao: descricao ? descricao : projeto.descricao
  }

  const projetoAtualizado = await projetosRepository.atualizar(id, novoProjeto)

  return res.json({
    data: projetoAtualizado
  })
}