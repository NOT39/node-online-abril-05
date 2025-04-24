import { PrismaClient } from '../generated/prisma/client.js'

export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === "dev" ? ["query"] : undefined
})