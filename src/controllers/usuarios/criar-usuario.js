import { BAD_REQUEST, StatusCodes } from 'http-status-codes'
import { UsuariosRepository } from '../../repositories/usuarios-repository.js'
import bcrypt from 'bcryptjs'

export async function criarUsuario(req, res) {
  const { email, senha, nome } = req.body

  if (!email) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      mensagem: "Email é obrigatório."
    })
  }

  if (!senha) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      mensagem: "Senha é obrigatória."
    })
  }

  if (!nome) {
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      mensagem: "Nome é obrigatório."
    })
  }

  const usuariosRepository = new UsuariosRepository()

  const usuarioEncontrado = await usuariosRepository.pegarPorEmail(email)

  if (usuarioEncontrado) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      mensagem: "Já existe um usuário registrado com o email informado."
    })
  }

  const usuarioCriado = await usuariosRepository.criar({
    email,
    nome,
    hash_senha: await bcrypt.hash(senha, 6)
  })

  const usuarioSemSenha = {
    ...usuarioCriado,
    hash_senha: undefined
  }

  return res.status(StatusCodes.CREATED).json({
    data: usuarioSemSenha
  })
}