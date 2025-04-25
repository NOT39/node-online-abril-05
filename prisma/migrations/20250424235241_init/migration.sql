-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash_senha" TEXT NOT NULL,
    "nome" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projetos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "imagem_url" TEXT,
    "repositorio_url" TEXT,
    "preview_url" TEXT,
    "usuario_id" TEXT NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "projeto_id" INTEGER NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dislikes" (
    "id" SERIAL NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "projeto_id" INTEGER NOT NULL,

    CONSTRAINT "dislikes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "projetos" ADD CONSTRAINT "projetos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dislikes" ADD CONSTRAINT "dislikes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dislikes" ADD CONSTRAINT "dislikes_projeto_id_fkey" FOREIGN KEY ("projeto_id") REFERENCES "projetos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
