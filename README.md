# 📝 Blogging Platform API

Uma API RESTful desenvolvida com **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**, permitindo realizar operações completas de CRUD (Create, Read, Update e Delete) em uma plataforma de blogs.

Este projeto foi desenvolvido com foco em boas práticas de arquitetura em camadas, separação de responsabilidades e organização de código, simulando a estrutura utilizada em aplicações profissionais.

---

# 🚀 Tecnologias utilizadas

* Node.js
* Express
* Prisma ORM
* PostgreSQL (Neon)
* JavaScript
* REST Client (testes)
* Git & GitHub

---

# 📂 Estrutura do projeto

```text
BloggingPlatform-API_REST/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   └── prisma.js
│   │
│   ├── controllers/
│   │   └── postController.js
│   │
│   ├── routes/
│   │   └── postRoutes.js
│   │
│   ├── services/
│   │   └── postService.js
│   │
│   ├── app.js
│   └── server.js
│
├── requests.http
├── package.json
├── .env
└── README.md
```

---

# 🏗 Arquitetura

O projeto segue a arquitetura em camadas.

```text
Cliente

↓

Express

↓

Routes

↓

Controllers

↓

Services

↓

Prisma ORM

↓

PostgreSQL
```

Cada camada possui apenas uma responsabilidade.

### Routes

* Recebem as requisições HTTP.
* Encaminham para o Controller correto.

### Controllers

* Recebem a requisição.
* Validam os dados de entrada.
* Chamam o Service.
* Retornam a resposta HTTP.

### Services

* Contêm as regras de negócio.
* Realizam operações utilizando o Prisma.

### Prisma

* Atua como ORM.
* Traduz código JavaScript em consultas SQL.

### PostgreSQL

* Responsável pelo armazenamento dos dados.

---

# 📦 Instalação

Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta

```bash
cd BloggingPlatform-API_REST
```

Instale as dependências

```bash
npm install
```

Configure o arquivo `.env`

```env
DATABASE_URL="sua_url_do_neon"
PORT=3000
```

Execute as migrações

```bash
npx prisma migrate dev
```

Inicie o servidor

```bash
npm run dev
```

---

# 📌 Endpoints

## Buscar todos os posts

```http
GET /posts
```

Resposta

```json
[
  {
    "id": 1,
    "title": "Node.js",
    "content": "Aprendendo Prisma",
    "category": "Backend",
    "tags": [
      "Node",
      "Express"
    ],
    "createdAt": "2026-07-10T12:00:00.000Z",
    "updatedAt": "2026-07-10T12:00:00.000Z"
  }
]
```

---

## Buscar post por ID

```http
GET /posts/:id
```

---

## Criar post

```http
POST /posts
```

Body

```json
{
    "title":"Meu Post",
    "content":"Conteúdo do post",
    "category":"Backend",
    "tags":["Node","Express"]
}
```

Resposta

```http
201 Created
```

---

## Atualizar post

```http
PUT /posts/:id
```

Body

```json
{
    "title":"Novo título",
    "content":"Novo conteúdo",
    "category":"Backend",
    "tags":["Prisma","REST"]
}
```

Resposta

```http
200 OK
```

---

## Deletar post

```http
DELETE /posts/:id
```

Resposta

```http
204 No Content
```

---

# 📊 Status HTTP utilizados

| Código | Significado |
| ------ | ----------- |
| 200    | OK          |
| 201    | Created     |
| 204    | No Content  |
| 400    | Bad Request |
| 404    | Not Found   |

---

# 🗄 Modelo da entidade Post

```prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  category  String
  tags      String[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

# 🧪 Testes

O projeto possui um arquivo `requests.http` compatível com a extensão **REST Client**, permitindo testar todos os endpoints diretamente no VS Code ou GitHub Codespaces.

Endpoints disponíveis para teste:

* GET /posts
* GET /posts/:id
* POST /posts
* PUT /posts/:id
* DELETE /posts/:id

---

# 📚 Conceitos aplicados

* Arquitetura em camadas
* CRUD REST
* Express
* Prisma ORM
* PostgreSQL
* Modularização
* Separação de responsabilidades
* Programação assíncrona (`async/await`)
* Desestruturação de objetos
* Conversão de tipos (`Number()`)
* Rotas RESTful
* Status HTTP
* Boas práticas de organização de código

---

# 🚀 Próximas melhorias

* Tratamento global de erros
* Classe `AppError`
* Middleware de erros
* Validação de dados com Zod ou Joi
* Autenticação com JWT
* Cadastro de usuários
* Comentários em posts
* Relacionamentos com Prisma
* Paginação
* Filtros de busca
* Documentação com Swagger/OpenAPI
* Testes automatizados

---

# 👨‍💻 Autor

Desenvolvido por **Daniel Araújo** como projeto de estudo para aprofundar conhecimentos em desenvolvimento Backend com Node.js, Express, Prisma ORM e PostgreSQL.
