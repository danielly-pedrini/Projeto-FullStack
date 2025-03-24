# Nelly Usuários - Sistema de Cadastro de Usuários

> Um sistema completo de gerenciamento de usuários desenvolvido como projeto full stack, contendo backend em Node.js com Express e frontend em React.

![Imagem do projeto](https://github.com/danielly-pedrini/Projeto-FullStack/blob/main/assets/README%20Full-Stack-Cadastro.PNG?raw=true)

![Imagem do projeto](https://github.com/danielly-pedrini/Projeto-FullStack/blob/main/assets/README%20Full-Stack-Lista-de-usuarios.PNG?raw=true)

![Imagem do projeto](https://github.com/danielly-pedrini/Projeto-FullStack/blob/main/assets/README%20Primeiro-Projeto-Full-Stack.PNG?raw=true)

## 📋 Índice

- [Descrição do Projeto](#-descrição-do-projeto)
- [Funcionalidades](#️-funcionalidades)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Uso](#️-uso)
- [API Endpoints](#-api-endpoints)
- [Autora](#-autora)
- [Contato](#-contato)

## 📝 Descrição do Projeto

Nelly Usuários é um sistema completo para gerenciamento de usuários, desenvolvido como primeiro projeto full stack. 
Ele permite cadastrar, listar, editar e excluir dados de usuários através de uma interface amigável, 
armazenando as informações em um banco de dados.

## ⚙️ Funcionalidades

- **Cadastro de Usuários**: Formulário para registrar novos usuários com validação de dados
- **Listagem de Usuários**: Visualização de todos os usuários cadastrados com avatares
- **Edição de Usuários**: Modal para atualização dos dados do usuário
- **Exclusão de Usuários**: Remoção de usuários do sistema
- **Notificações**: Sistema de notificações para informar o resultado das operações
- **Validação de Dados**: Verificação de dados no backend para garantir integridade

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- Prisma ORM
- Cors
- Middlewares personalizados

### Frontend
- React.js
- React Router DOM
- Styled Components
- Axios
- Hooks (useState, useEffect, useRef)

## 📁 Estrutura do Projeto

### Backend

```
├── server.js              # Arquivo principal com configuração do Express
├── prisma/                # Configuração do Prisma ORM
│   └── schema.prisma      # Modelo de dados
├── package.json           # Dependências do projeto
└── .env                   # Variáveis de ambiente
```

### Frontend

```
├── src/
│   ├── pages/
│   │   ├── Home/          # Página de cadastro
│   │   │   ├── index.js   # Componente principal
│   │   │   └── styles.js  # Estilos
│   │   └── ListUsers/     # Página de listagem
│   │       ├── index.js   # Componente principal
│   │       └── styles.js  # Estilos
│   ├── components/        # Componentes reutilizáveis
│   │   ├── button/        # Componente de botão
│   │   └── topbackground/ # Componente de background superior
│   ├── services/
│   │   └── api.js         # Configuração do Axios
│   ├── assets/            # Imagens e outros recursos
│   └── App.js             # Componente principal
├── package.json           # Dependências do projeto
└── public/                # Arquivos públicos
```

## 🖥️ Uso

### Cadastro de usuários
1. Acesse a página inicial.
2. Preencha os campos: Nome, Idade e E-mail.
3. Clique em "Cadastrar".
4. Uma notificação verde confirmará o cadastro bem-sucedido.

### Listagem de usuários
1. Na página inicial, clique em "Ver Lista de Usuários".
2. A página exibirá todos os usuários cadastrados com seus respectivos avatares, nomes, idades e e-mails.

### Edição de usuários
1. Na página de listagem, clique no ícone de edição (lápis) ao lado do usuário.
2. Um modal será aberto com os dados atuais preenchidos.
3. Edite as informações desejadas.
4. Clique em "Salvar" para confirmar ou "Cancelar" para fechar sem salvar.

### Exclusão de usuários
1. Na página de listagem, clique no ícone de exclusão (lixeira) ao lado do usuário.
2. O usuário será removido da lista automaticamente.

## 📡 API Endpoints

| Método | URL | Descrição |
|--------|-----|-----------|
| GET | /usuarios | Lista todos os usuários |
| GET | /usuarios/:id | Busca um usuário específico |
| POST | /usuarios | Cria um novo usuário |
| PUT | /usuarios/:id | Atualiza um usuário existente |
| DELETE | /usuarios/:id | Remove um usuário |

### Exemplo de requisição para criar usuário:

```json
POST /usuarios
{
  "name": "João Silva",
  "age": 30,
  "email": "joao@exemplo.com"
}
```

### Exemplo de resposta:

```json
{
  "user": {
    "id": "c1f9e1d5-8354-4f9a-8b3e-6c9a2e0f2a4c",
    "name": "João Silva",
    "age": 30,
    "email": "joao@exemplo.com"
  },
  "message": "Usuário criado com sucesso!"
}
```

## 👩‍💻 Autora

**Danielly Pedrini** - ⌨️ com ❤️

## 📱 Contato

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/danielly-pedrini)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniellypedrini/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5515991345227)

