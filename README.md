# 🚀 Jitterbit Order API

API REST desenvolvida em **Node.js**, **Express** e **MongoDB** para
gerenciamento de pedidos.

Este projeto foi desenvolvido como parte de um **teste técnico**, com
foco em:

-   boas práticas de desenvolvimento backend
-   organização em camadas
-   uso de variáveis de ambiente
-   estrutura escalável de API

------------------------------------------------------------------------

# 📌 Objetivo

A API permite o gerenciamento de pedidos de clientes, oferecendo
endpoints para:

-   📦 Criar pedidos
-   📄 Listar pedidos
-   🔍 Buscar pedidos por ID

------------------------------------------------------------------------

# 🧱 Arquitetura da Aplicação

A aplicação segue uma arquitetura em camadas para garantir **separação
de responsabilidades** e **manutenção facilitada**.

## Fluxo da Arquitetura

``` mermaid
flowchart LR
A[Client / Postman] --> B[Routes]
B --> C[Controller]
C --> D[Service]
D --> E[Model]
E --> F[(MongoDB)]
```

------------------------------------------------------------------------

# 📁 Estrutura do Projeto

    jitterbit-order-api
    │
    ├── src
    │   ├── controllers
    │   │   └── orderController.js
    │   │
    │   ├── services
    │   │   └── orderService.js
    │   │
    │   ├── models
    │   │   └── Order.js
    │   │
    │   ├── routes
    │   │   └── orderRoutes.js
    │   │
    │   ├── database
    │   │   └── db.js
    │   │
    │   └── app.js
    │
    ├── server.js
    ├── .env
    ├── .gitignore
    ├── package.json
    └── README.md

------------------------------------------------------------------------

# 🛠 Tecnologias Utilizadas

-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   Dotenv
-   Postman
-   Git

------------------------------------------------------------------------

# ⚙️ Instalação do Projeto

## 1. Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/jitterbit-order-api.git
```

Entrar na pasta:

``` bash
cd jitterbit-order-api
```

## 2. Instalar dependências

``` bash
npm install
```

------------------------------------------------------------------------

# 🔐 Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

    PORT=3000
    MONGO_URI=mongodb://usuario:senha@host:porta/database

### Exemplo com MongoDB Atlas

    PORT=3000
    MONGO_URI=mongodb://thiago:SUA_SENHA@ac-bfrnntq-shard-00-00.po946yg.mongodb.net:27017,ac-bfrnntq-shard-00-01.po946yg.mongodb.net:27017,ac-bfrnntq-shard-00-02.po946yg.mongodb.net:27017/?ssl=true&replicaSet=atlas-93uud9-shard-0&authSource=admin&appName=Clusterjitterbitorderapi

O arquivo `.env` está no `.gitignore` para proteger credenciais.

------------------------------------------------------------------------

# ▶️ Executando o Projeto

``` bash
node server.js
```

Saída esperada:

    MongoDB conectado
    Servidor rodando na porta 3000

API disponível em:

    http://localhost:3000

------------------------------------------------------------------------

# 📡 Endpoints da API

## Criar Pedido

    POST /api/orders

### Body

``` json
{
  "customerName": "Thiago",
  "product": "Mouse",
  "quantity": 2,
  "price": 150
}
```

### Response

``` json
{
  "_id": "69b20990128069c92d42800d",
  "customerName": "Thiago",
  "product": "Mouse",
  "quantity": 2,
  "price": 150,
  "createdAt": "2026-03-12T00:32:16.274Z"
}
```

------------------------------------------------------------------------

## Listar Pedidos

    GET /api/orders

------------------------------------------------------------------------

## Buscar Pedido por ID

    GET /api/orders/:id

Exemplo:

    GET /api/orders/69b20990128069c92d42800d

------------------------------------------------------------------------

# 🧪 Testando a API

Ferramentas recomendadas:

-   Postman
-   Insomnia
-   Thunder Client

Exemplo:

    POST http://localhost:3000/api/orders

------------------------------------------------------------------------

# 📈 Melhorias Futuras

-   Atualizar pedidos (`PUT /orders/:id`)
-   Remover pedidos (`DELETE /orders/:id`)
-   Validação de dados
-   Middleware global de erros
-   Testes automatizados
-   Documentação com Swagger
-   Docker

------------------------------------------------------------------------

# 👨‍💻 Autor

**Thiago Silva de Oliveira**

Estudante de **Bacharelado em Tecnologia da Informação -- UNIVESP**

Interesse em:

-   Backend Development
-   Engenharia de Software
-   Arquitetura de Sistemas

------------------------------------------------------------------------

# 📄 Licença

Projeto desenvolvido para fins educacionais e avaliação técnica.