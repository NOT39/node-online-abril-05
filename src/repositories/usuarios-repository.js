import { prisma } from '../lib/prisma.js'

export class UsuariosRepository {
  async listar() {
    const usuariosEncontrados = await prisma.usuario.findMany()

    return usuariosEncontrados
  }

  async pegarPorId(id) {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id
      }
    })

    return usuario
  }

  async pegarPorEmail(email) {
    const usuario = await prisma.usuario.findUnique({
      where: {
        email
      }
    })

    return usuario
  }

  async criar({ email, hash_senha, nome, ativo }) {
    const usuarioCriado = await prisma.usuario.create({
      data: {
        email,
        hash_senha,
        nome,
        ativo,
      }
    })

    return usuarioCriado
  }

  async atualizar(id, { email, hash_senha, nome, ativo }) {
    const usuarioAtualizado = await prisma.usuario.update({
      where: {
        id
      },
      data: {
        email,
        hash_senha,
        nome,
        ativo,
      }
    })

    return usuarioAtualizado
  }

  async apagar(id) {
    const usuarioDeletado = await prisma.usuario.delete({
      where: {
        id
      }
    })

    return usuarioDeletado
  }
}