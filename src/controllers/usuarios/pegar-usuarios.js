import { UsuariosRepository } from '../../repositories/usuarios-repository.js'

export async function pegarUsuarios(req, res) {
  const usuariosRepository = new UsuariosRepository()
  const usuariosEncontrados = await usuariosRepository.listar()

  const usuariosSemSenha = usuariosEncontrados.map((usuario) => {
    return {
      ...usuario,
      hash_senha: undefined
    }
  })

  return res.json({
    data: usuariosSemSenha
  })
}