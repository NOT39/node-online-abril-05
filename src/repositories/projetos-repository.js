import { prisma } from '../lib/prisma.js'

export class ProjetosRepository {
  async listar(titulo) {
    const projetosEncontrados = await prisma.projeto.findMany({
      where: {
        titulo: {
          contains: titulo
        },
      }
    })

    return projetosEncontrados
  }

  async pegarPorId(id) {
    const projeto = await prisma.projeto.findUnique({
      where: {
        id
      }
    })

    return projeto
  }

  async pegarProjetoPorUsuarioId(usuarioId) {
    const projetos = await prisma.projeto.findMany({
      where: {
        usuarioId
      }
    })

    return projetos
  }

  async criar({ titulo, descricao, usuarioId, imagemURL, repositorioURL, previewURL }) {
    const projetoCriado = await prisma.projeto.create({
      data: {
        titulo,
        descricao,
        usuarioId,
        imagemURL,
        repositorioURL,
        previewURL
      }
    })

    return projetoCriado
  }

  async atualizar(id, { titulo, descricao, imagemURL, repositorioURL, previewURL }) {
    const projetoAtualizado = await prisma.projeto.update({
      where: {
        id
      },
      data: {
        titulo,
        descricao,
        imagemURL,
        repositorioURL,
        previewURL
      }
    })

    return projetoAtualizado
  }

  async apagar(id) {
    const projetoDeletado = await prisma.projeto.delete({
      where: {
        id: parseInt(id)
      }
    })

    return projetoDeletado
  }
}