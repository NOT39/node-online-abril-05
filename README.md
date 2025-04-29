# Documentação da API

Esta aplicação fornece uma API para gerenciar usuários e projetos. Abaixo estão listadas todas as rotas disponíveis.

## Rotas de Autenticação

### POST `/auth/login`
- **Descrição**: Realiza o login de um usuário.
- **Corpo da Requisição**:
  ```json
  {
    "email": "string",
    "senha": "string"
  }
  ```
- **Exemplo de Retorno**:
  ```json
  {
    "token": "string"
  }
  ```

---

## Rotas de Usuários

### GET `/usuarios`
- **Descrição**: Retorna a lista de todos os usuários.
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  [
    {
      "id": 1,
      "email": "usuario@example.com",
      "nome": "Usuário Exemplo",
      "ativo": true
    }
  ]
  ```

### GET `/usuarios/:id`
- **Descrição**: Retorna os detalhes de um usuário específico.
- **Parâmetros**:
  - `id`: ID do usuário.
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  {
    "id": 1,
    "email": "usuario@example.com",
    "nome": "Usuário Exemplo",
    "ativo": true
  }
  ```

### POST `/usuarios`
- **Descrição**: Cria um novo usuário.
- **Corpo da Requisição**:
  ```json
  {
    "email": "string",
    "senha": "string",
    "nome": "string",
    "ativo": "boolean"
  }
  ```
- **Exemplo de Retorno**:
  ```json
  {
    "id": 1,
    "email": "usuario@example.com",
    "nome": "Usuário Exemplo",
    "ativo": true
  }
  ```

### PUT `/usuarios/:id`
- **Descrição**: Atualiza os dados de um usuário existente.
- **Parâmetros**:
  - `id`: ID do usuário.
- **Corpo da Requisição**:
  ```json
  {
    "email": "string",
    "senha": "string",
    "nome": "string",
    "ativo": "boolean"
  }
  ```
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  {
    "id": 1,
    "email": "usuario@example.com",
    "nome": "Usuário Atualizado",
    "ativo": true
  }
  ```

### DELETE `/usuarios/:id`
- **Descrição**: Remove um usuário do sistema.
- **Parâmetros**:
  - `id`: ID do usuário.
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  {
    "message": "Usuário removido com sucesso."
  }
  ```

---

## Rotas de Projetos

### GET `/projetos`
- **Descrição**: Retorna a lista de todos os projetos.
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  [
    {
      "id": 1,
      "titulo": "Projeto Exemplo",
      "descricao": "Descrição do projeto",
      "usuarioId": 1,
      "imagemURL": "http://example.com/imagem.png",
      "repositorioURL": "http://github.com/example",
      "previewURL": "http://example.com/preview"
    }
  ]
  ```

### GET `/projetos/:id`
- **Descrição**: Retorna os detalhes de um projeto específico.
- **Parâmetros**:
  - `id`: ID do projeto.
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  {
    "id": 1,
    "titulo": "Projeto Exemplo",
    "descricao": "Descrição do projeto",
    "usuarioId": 1,
    "imagemURL": "http://example.com/imagem.png",
    "repositorioURL": "http://github.com/example",
    "previewURL": "http://example.com/preview"
  }
  ```

### GET `/usuarios/:id/projetos`
- **Descrição**: Retorna todos os projetos associados a um usuário específico.
- **Parâmetros**:
  - `id`: ID do usuário.
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  [
    {
      "id": 1,
      "titulo": "Projeto Exemplo",
      "descricao": "Descrição do projeto",
      "usuarioId": 1,
      "imagemURL": "http://example.com/imagem.png",
      "repositorioURL": "http://github.com/example",
      "previewURL": "http://example.com/preview"
    }
  ]
  ```

### POST `/projetos`
- **Descrição**: Cria um novo projeto.
- **Corpo da Requisição**:
  ```json
  {
    "titulo": "string",
    "descricao": "string",
    "usuarioId": "number",
    "imagemURL": "string",
    "repositorioURL": "string",
    "previewURL": "string"
  }
  ```
- **Exemplo de Retorno**:
  ```json
  {
    "id": 1,
    "titulo": "Projeto Exemplo",
    "descricao": "Descrição do projeto",
    "usuarioId": 1,
    "imagemURL": "http://example.com/imagem.png",
    "repositorioURL": "http://github.com/example",
    "previewURL": "http://example.com/preview"
  }
  ```

### PUT `/projetos/:id`
- **Descrição**: Atualiza os dados de um projeto existente.
- **Parâmetros**:
  - `id`: ID do projeto.
- **Corpo da Requisição**:
  ```json
  {
    "titulo": "string",
    "descricao": "string",
    "imagemURL": "string",
    "repositorioURL": "string",
    "previewURL": "string"
  }
  ```
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  {
    "id": 1,
    "titulo": "Projeto Atualizado",
    "descricao": "Descrição atualizada",
    "usuarioId": 1,
    "imagemURL": "http://example.com/imagem.png",
    "repositorioURL": "http://github.com/example",
    "previewURL": "http://example.com/preview"
  }
  ```

### DELETE `/projetos/:id`
- **Descrição**: Remove um projeto do sistema.
- **Parâmetros**:
  - `id`: ID do projeto.
- **Autenticação**: Requer um token JWT.
- **Exemplo de Retorno**:
  ```json
  {
    "message": "Projeto removido com sucesso."
  }
  ```
