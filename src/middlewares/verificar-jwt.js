import jwt from 'jsonwebtoken'

import { StatusCodes } from 'http-status-codes'

export async function verificarJwt(req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      mensagem: "Usuário não autenticado."
    })
  }

  const token = authorization.split(" ")[1]

  const { sub } = jwt.verify(token, process.env.JWT_SECRET)

  if (!sub) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      mensagem: "Usuário não autenticado."
    })
  }

  req.sub = sub

  next()
}